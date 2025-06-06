'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowLeftIcon, Download, Plus, Trash2, Eye } from 'lucide-react';
import Link from 'next/link';

interface InvoiceItem {
  id: string;
  description: string;
  rate: number;
  quantity: number;
  amount: number;
}

interface InvoiceData {
  // Sender Information
  companyName: string;
  businessNumber: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  phone: string;
  email: string;

  // Invoice Header
  invoiceTitle: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;

  // Bill To
  clientName: string;
  clientAddressLine1: string;
  clientAddressLine2: string;
  clientPostalCode: string;
  clientPhone: string;
  clientEmail: string;

  // Items and totals
  items: InvoiceItem[];
  currency: string;
  taxPercentage: number;

  // Banking details
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  ifscCode: string;
  additionalBankInfo: string;
}

const currencies = [
  { code: 'INR', symbol: '₹' },
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
];

const dueDateOptions = ['On Receipt', 'Net 15', 'Net 30', 'Net 45', 'Net 60'];

export default function InvoiceGenerationPage() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    companyName: 'Your Company Name',
    businessNumber: 'CHRPA3415K',
    addressLine1: 'HOUSE NO. 3 BEHIND DR. KARAN HOSPITAL',
    addressLine2: 'M.C. COLONY, SIRSA 125055',
    postalCode: '125055',
    phone: '9802391342',
    email: 'yourcompany@gmail.com',
    invoiceTitle: 'INVOICE 001',
    invoiceNumber: 'INV0001',
    invoiceDate: new Date().toISOString().split('T')[0],
    dueDate: 'On Receipt',
    clientName: 'Client Name',
    clientAddressLine1: 'House No. 1077, Sector 43-B',
    clientAddressLine2: 'Chandigarh, India 160022',
    clientPostalCode: '160022',
    clientPhone: '+917009147525',
    clientEmail: 'client@gmail.com',
    items: [
      {
        id: '1',
        description: 'IT Services - Development',
        rate: 106500,
        quantity: 1,
        amount: 106500,
      },
    ],
    currency: 'INR',
    taxPercentage: 0,
    bankName: 'Indusind Bank',
    accountHolder: 'Your Name',
    accountNumber: '159802391342',
    ifscCode: 'INDB0000162',
    additionalBankInfo: '',
  });

  const [editingField, setEditingField] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [tempValue, setTempValue] = useState<string | number>('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-save to localStorage
  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem('invoiceDraft', JSON.stringify(invoiceData));
    }, 30000);
    return () => clearInterval(interval);
  }, [invoiceData]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('invoiceDraft');
    if (saved) {
      setInvoiceData(JSON.parse(saved));
    }
  }, []);

  // Focus input when editing starts
  useEffect(() => {
    if (editingField && inputRef.current) {
      inputRef.current.focus();
      // Only call select() if it's an input element (not select dropdown)
      if (
        inputRef.current.select &&
        typeof inputRef.current.select === 'function'
      ) {
        inputRef.current.select();
      }
    }
  }, [editingField]);

  const getCurrencySymbol = () => {
    return (
      currencies.find((c) => c.code === invoiceData.currency)?.symbol || '₹'
    );
  };

  const updateField = (field: keyof InvoiceData, value: any) => {
    setInvoiceData((prev) => ({ ...prev, [field]: value }));
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id === id) {
          const updated = { ...item, [field]: value };
          if (field === 'rate' || field === 'quantity') {
            updated.amount = updated.rate * updated.quantity;
          }
          return updated;
        }
        return item;
      }),
    }));
  };

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: 'New Service',
      rate: 0,
      quantity: 1,
      amount: 0,
    };
    setInvoiceData((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
  };

  const removeItem = (id: string) => {
    if (invoiceData.items.length > 1) {
      setInvoiceData((prev) => ({
        ...prev,
        items: prev.items.filter((item) => item.id !== id),
      }));
    }
  };

  const calculateSubtotal = () => {
    return invoiceData.items.reduce((sum, item) => sum + item.amount, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * (invoiceData.taxPercentage / 100);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleFieldClick = (
    fieldName: string,
    currentValue: string | number
  ) => {
    setEditingField(fieldName);
    setTempValue(currentValue);
  };

  const handleFieldSave = (
    fieldName: string,
    updateFunction: (value: any) => void
  ) => {
    updateFunction(tempValue);
    setEditingField(null);
    setTempValue('');
  };

  const handleFieldCancel = () => {
    setEditingField(null);
    setTempValue('');
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    fieldName: string,
    updateFunction: (value: any) => void
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleFieldSave(fieldName, updateFunction);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleFieldCancel();
    }
  };

  const generatePDF = () => {
    // For now, just show an alert. In production, you'd integrate with jsPDF or similar
    alert(
      'PDF generation would be implemented here using libraries like jsPDF or Puppeteer'
    );
  };

  const EditableText = ({
    value,
    onChange,
    fieldName,
    className = '',
    placeholder = '',
    type = 'text',
    multiline = false,
  }: {
    value: string | number;
    onChange: (value: any) => void;
    fieldName: string;
    className?: string;
    placeholder?: string;
    type?: string;
    multiline?: boolean;
  }) => {
    const isEditing = editingField === fieldName;

    if (isEditing) {
      if (multiline) {
        return (
          <textarea
            ref={inputRef as any}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onBlur={() => handleFieldSave(fieldName, onChange)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleFieldSave(fieldName, onChange);
              } else if (e.key === 'Escape') {
                e.preventDefault();
                handleFieldCancel();
              }
            }}
            className={`${className} border border-blue-500 rounded px-1 bg-blue-50 resize-none focus:outline-none focus:ring-1 focus:ring-blue-400`}
            placeholder={placeholder}
            rows={2}
          />
        );
      }

      return (
        <input
          ref={inputRef}
          type={type}
          value={tempValue}
          onChange={(e) =>
            setTempValue(
              type === 'number'
                ? parseFloat(e.target.value) || 0
                : e.target.value
            )
          }
          onBlur={() => handleFieldSave(fieldName, onChange)}
          onKeyDown={(e) => handleKeyDown(e, fieldName, onChange)}
          className={`${className} border border-blue-500 rounded px-1 bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-400`}
          placeholder={placeholder}
        />
      );
    }

    return (
      <span
        onClick={() => handleFieldClick(fieldName, value)}
        className={`${className} cursor-pointer hover:bg-gray-100 hover:shadow-sm rounded px-1 py-0.5 transition-colors inline-block min-w-[100px] ${
          !value || value === '' ? 'text-gray-400' : ''
        }`}
        title="Click to edit"
      >
        {value || placeholder}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b ">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeftIcon width="20" height="20" />
                Back to Home
              </Link>
              <div className="text-2xl font-bold text-gray-900">
                Live Invoice Editor
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPreview(true)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Eye width="16" height="16" />
                Preview
              </button>
              <button
                onClick={generatePDF}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Download width="16" height="16" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Document */}
      <div className="max-w-4xl mx-auto p-8">
        <div
          className="bg-white shadow-lg rounded-lg p-12"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          {/* Header Section */}
          <div className="flex justify-between items-start mb-12">
            {/* Sender Info */}
            <div className="space-y-2">
              <EditableText
                value={invoiceData.companyName}
                onChange={(value) => updateField('companyName', value)}
                fieldName="companyName"
                className="font-bold text-2xl block"
                placeholder="Your Company Name"
              />

              <div className="text-gray-600 space-y-1 text-sm">
                <div>
                  Business Number{' '}
                  <EditableText
                    value={invoiceData.businessNumber}
                    onChange={(value) => updateField('businessNumber', value)}
                    fieldName="businessNumber"
                    placeholder="Business Number"
                  />
                </div>

                <EditableText
                  value={invoiceData.addressLine1}
                  onChange={(value) => updateField('addressLine1', value)}
                  fieldName="addressLine1"
                  className="block"
                  placeholder="Address Line 1"
                />
                <br />

                <div className="flex">
                  <EditableText
                    value={invoiceData.addressLine2}
                    onChange={(value) => updateField('addressLine2', value)}
                    fieldName="addressLine2"
                    className="block"
                    placeholder="Address Line 2"
                  />

                  <EditableText
                    value={invoiceData.postalCode}
                    onChange={(value) => updateField('postalCode', value)}
                    fieldName="postalCode"
                    className="block"
                    placeholder="Postal Code"
                  />
                </div>

                <EditableText
                  value={invoiceData.phone}
                  onChange={(value) => updateField('phone', value)}
                  fieldName="phone"
                  className="block"
                  placeholder="Phone Number"
                />
                <br />

                <EditableText
                  value={invoiceData.email}
                  onChange={(value) => updateField('email', value)}
                  fieldName="email"
                  className="block"
                  placeholder="Email Address"
                  type="email"
                />
              </div>
            </div>

            {/* Invoice Details */}
            <div className="text-right">
              <div className="flex flex-col">
                <EditableText
                  value={invoiceData.invoiceTitle}
                  onChange={(value) => updateField('invoiceTitle', value)}
                  fieldName="invoiceTitle"
                  className="text-3xl font-bold block mb-2"
                  placeholder="INVOICE 001"
                />

                <EditableText
                  value={invoiceData.invoiceNumber}
                  onChange={(value) => updateField('invoiceNumber', value)}
                  fieldName="invoiceNumber"
                  className="text-gray-600 block mb-4"
                  placeholder="INV0001"
                />
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold">DATE</div>
                  <EditableText
                    value={invoiceData.invoiceDate}
                    onChange={(value) => updateField('invoiceDate', value)}
                    fieldName="invoiceDate"
                    type="date"
                  />
                </div>

                <div>
                  <div className="font-semibold">DUE</div>
                  {editingField === 'dueDate' ? (
                    <select
                      ref={inputRef as any}
                      value={tempValue || invoiceData.dueDate}
                      onChange={(e) => setTempValue(e.target.value)}
                      onBlur={() =>
                        handleFieldSave('dueDate', (value) =>
                          updateField('dueDate', value)
                        )
                      }
                      className="border border-blue-500 rounded px-1 bg-blue-50"
                    >
                      {dueDateOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span
                      onClick={() =>
                        handleFieldClick('dueDate', invoiceData.dueDate)
                      }
                      className="cursor-pointer hover:bg-gray-100 rounded px-1 py-0.5"
                      title="Click to edit"
                    >
                      {invoiceData.dueDate}
                    </span>
                  )}
                </div>

                <div>
                  <div className="font-semibold">BALANCE DUE</div>
                  <div className="text-xl font-bold">
                    {editingField === 'currency' ? (
                      <select
                        ref={inputRef as any}
                        value={tempValue || invoiceData.currency}
                        onChange={(e) => setTempValue(e.target.value)}
                        onBlur={() =>
                          handleFieldSave('currency', (value) =>
                            updateField('currency', value)
                          )
                        }
                        className="border border-blue-500 rounded px-1 bg-blue-50 text-sm"
                      >
                        {currencies.map((curr) => (
                          <option key={curr.code} value={curr.code}>
                            {curr.code} ({curr.symbol})
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span
                        onClick={() =>
                          handleFieldClick('currency', invoiceData.currency)
                        }
                        className="cursor-pointer hover:bg-gray-100 rounded px-1"
                        title="Click to change currency"
                      >
                        {getCurrencySymbol()}
                      </span>
                    )}{' '}
                    {calculateTotal().toLocaleString('en-IN', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-300 my-8" />

          {/* Bill To Section */}
          <div className="mb-8">
            <div className="font-semibold text-gray-700 mb-3">BILL TO</div>
            <EditableText
              value={invoiceData.clientName}
              onChange={(value) => updateField('clientName', value)}
              fieldName="clientName"
              className="font-bold text-lg block mb-2"
              placeholder="Client Name"
            />

            <div className="text-gray-600 space-y-1 text-sm flex flex-col">
              <EditableText
                value={invoiceData.clientAddressLine1}
                onChange={(value) => updateField('clientAddressLine1', value)}
                fieldName="clientAddressLine1"
                className="block"
                placeholder="Client Address Line 1"
              />

              <div className="flex">
                <EditableText
                  value={invoiceData.clientAddressLine2}
                  onChange={(value) => updateField('clientAddressLine2', value)}
                  fieldName="clientAddressLine2"
                  className="block"
                  placeholder="Client Address Line 2"
                />

                <EditableText
                  value={invoiceData.clientPostalCode}
                  onChange={(value) => updateField('clientPostalCode', value)}
                  fieldName="clientPostalCode"
                  className="block"
                  placeholder="Postal Code"
                />
              </div>
              <EditableText
                value={invoiceData.clientPhone}
                onChange={(value) => updateField('clientPhone', value)}
                fieldName="clientPhone"
                className="block"
                placeholder="Phone Number"
              />

              <EditableText
                value={invoiceData.clientEmail}
                onChange={(value) => updateField('clientEmail', value)}
                fieldName="clientEmail"
                className="block"
                placeholder="Email Address"
                type="email"
              />
            </div>
          </div>

          <hr className="border-gray-300 my-8" />

          {/* Items Table */}
          <div className="mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-3 font-semibold text-gray-700">
                    DESCRIPTION
                  </th>
                  <th className="text-right py-3 font-semibold text-gray-700 w-32">
                    RATE
                  </th>
                  <th className="text-right py-3 font-semibold text-gray-700 w-20">
                    QTY
                  </th>
                  <th className="text-right py-3 font-semibold text-gray-700 w-32">
                    AMOUNT
                  </th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item, index) => (
                  <tr
                    key={item.id}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="py-3">
                      <EditableText
                        value={item.description}
                        onChange={(value) =>
                          updateItem(item.id, 'description', value)
                        }
                        fieldName={`item-desc-${item.id}`}
                        className="w-full"
                        placeholder="Item description"
                      />
                    </td>
                    <td className="text-right py-3">
                      {getCurrencySymbol()}
                      <EditableText
                        value={item.rate}
                        onChange={(value) => updateItem(item.id, 'rate', value)}
                        fieldName={`item-rate-${item.id}`}
                        type="number"
                        className="text-right"
                        placeholder="0.00"
                      />
                    </td>
                    <td className="text-right py-3">
                      <EditableText
                        value={item.quantity}
                        onChange={(value) =>
                          updateItem(item.id, 'quantity', value)
                        }
                        fieldName={`item-qty-${item.id}`}
                        type="number"
                        className="text-right"
                        placeholder="1"
                      />
                    </td>
                    <td className="text-right py-3 font-medium">
                      {getCurrencySymbol()}
                      {item.amount.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-3 text-center">
                      {invoiceData.items.length > 1 && (
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-800 p-1"
                          title="Remove item"
                        >
                          <Trash2 width="14" height="14" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}

                {/* Add New Item Row */}
                <tr>
                  <td colSpan={5} className="py-3">
                    <button
                      onClick={addItem}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-2 rounded transition-colors"
                    >
                      <Plus width="16" height="16" />
                      Add new item
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="border-gray-300 my-8" />

          {/* Totals Section */}
          <div className="flex justify-end mb-8">
            <div className="w-80">
              <div className="flex justify-between py-2 text-lg">
                <span className="font-semibold">TOTAL</span>
                <span className="font-semibold">
                  {getCurrencySymbol()}
                  {calculateSubtotal().toLocaleString('en-IN', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

              {/* Tax Row */}
              <div className="flex justify-between py-2">
                <span className="flex items-center gap-2">
                  TAX (
                  <EditableText
                    value={invoiceData.taxPercentage}
                    onChange={(value) => updateField('taxPercentage', value)}
                    fieldName="taxPercentage"
                    type="number"
                    className="w-12 text-center"
                    placeholder="0"
                  />
                  %)
                </span>
                <span>
                  {getCurrencySymbol()}
                  {calculateTax().toLocaleString('en-IN', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

              <div className="flex justify-between py-3 border-t border-gray-300 font-bold text-xl">
                <span>BALANCE DUE</span>
                <span>
                  {getCurrencySymbol()}{' '}
                  {calculateTotal().toLocaleString('en-IN', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div className="mt-8">
            <div className="font-semibold text-gray-700 mb-3">Bank Details</div>
            <div className="text-gray-600 space-y-1 text-sm">
              <div>
                IFSC Code-{' '}
                <EditableText
                  value={invoiceData.ifscCode}
                  onChange={(value) => updateField('ifscCode', value)}
                  fieldName="ifscCode"
                  placeholder="IFSC Code"
                />
              </div>
              <div>
                Account Number-{' '}
                <EditableText
                  value={invoiceData.accountNumber}
                  onChange={(value) => updateField('accountNumber', value)}
                  fieldName="accountNumber"
                  placeholder="Account Number"
                />
              </div>
              <div>
                Beneficiary Name-{' '}
                <EditableText
                  value={invoiceData.accountHolder}
                  onChange={(value) => updateField('accountHolder', value)}
                  fieldName="accountHolder"
                  placeholder="Account Holder Name"
                />
              </div>
              <div>
                Bank Name-{' '}
                <EditableText
                  value={invoiceData.bankName}
                  onChange={(value) => updateField('bankName', value)}
                  fieldName="bankName"
                  placeholder="Bank Name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Invoice Preview</h3>
              <div className="flex gap-3">
                <button
                  onClick={generatePDF}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Download width="16" height="16" />
                  Download PDF
                </button>
                <button
                  onClick={() => setShowPreview(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="p-6">
              <div
                className="bg-white p-8 text-sm max-w-3xl mx-auto"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {/* Same invoice structure but without editing functionality */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="font-bold text-2xl mb-2">
                      {invoiceData.companyName}
                    </div>
                    {invoiceData.businessNumber && (
                      <div className="text-gray-600 mb-2">
                        Business Number {invoiceData.businessNumber}
                      </div>
                    )}
                    <div className="text-gray-600 space-y-1">
                      {invoiceData.addressLine1 && (
                        <div>{invoiceData.addressLine1}</div>
                      )}
                      {invoiceData.addressLine2 && (
                        <div>{invoiceData.addressLine2}</div>
                      )}
                      {invoiceData.postalCode && (
                        <div>{invoiceData.postalCode}</div>
                      )}
                      {invoiceData.phone && <div>{invoiceData.phone}</div>}
                      {invoiceData.email && <div>{invoiceData.email}</div>}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold mb-1">
                      {invoiceData.invoiceTitle}
                    </div>
                    <div className="text-gray-600 mb-4">
                      {invoiceData.invoiceNumber}
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold">DATE</div>
                        <div>
                          {new Date(
                            invoiceData.invoiceDate
                          ).toLocaleDateString()}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">DUE</div>
                        <div>{invoiceData.dueDate}</div>
                      </div>
                      <div>
                        <div className="font-semibold">BALANCE DUE</div>
                        <div className="text-xl font-bold">
                          {getCurrencySymbol()}{' '}
                          {calculateTotal().toLocaleString('en-IN', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-300 my-8" />

                <div className="mb-8">
                  <div className="font-semibold text-gray-700 mb-3">
                    BILL TO
                  </div>
                  <div className="font-bold text-lg mb-2">
                    {invoiceData.clientName}
                  </div>
                  <div className="text-gray-600 space-y-1">
                    {invoiceData.clientAddressLine1 && (
                      <div>{invoiceData.clientAddressLine1}</div>
                    )}
                    {invoiceData.clientAddressLine2 && (
                      <div>{invoiceData.clientAddressLine2}</div>
                    )}
                    {invoiceData.clientPostalCode && (
                      <div>{invoiceData.clientPostalCode}</div>
                    )}
                    {invoiceData.clientPhone && (
                      <div>{invoiceData.clientPhone}</div>
                    )}
                    {invoiceData.clientEmail && (
                      <div>{invoiceData.clientEmail}</div>
                    )}
                  </div>
                </div>

                <hr className="border-gray-300 my-8" />

                <table className="w-full mb-8">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-3 font-semibold text-gray-700">
                        DESCRIPTION
                      </th>
                      <th className="text-right py-3 font-semibold text-gray-700">
                        RATE
                      </th>
                      <th className="text-right py-3 font-semibold text-gray-700">
                        QTY
                      </th>
                      <th className="text-right py-3 font-semibold text-gray-700">
                        AMOUNT
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.items.map((item, index) => (
                      <tr
                        key={item.id}
                        className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                      >
                        <td className="py-3">{item.description}</td>
                        <td className="text-right py-3">
                          {getCurrencySymbol()}
                          {item.rate.toLocaleString('en-IN', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </td>
                        <td className="text-right py-3">{item.quantity}</td>
                        <td className="text-right py-3">
                          {getCurrencySymbol()}
                          {item.amount.toLocaleString('en-IN', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <hr className="border-gray-300 my-8" />

                <div className="flex justify-end mb-8">
                  <div className="w-80">
                    <div className="flex justify-between py-2 text-lg">
                      <span className="font-semibold">TOTAL</span>
                      <span className="font-semibold">
                        {getCurrencySymbol()}
                        {calculateSubtotal().toLocaleString('en-IN', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                    {invoiceData.taxPercentage > 0 && (
                      <div className="flex justify-between py-2">
                        <span>TAX ({invoiceData.taxPercentage}%)</span>
                        <span>
                          {getCurrencySymbol()}
                          {calculateTax().toLocaleString('en-IN', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between py-3 border-t border-gray-300 font-bold text-xl">
                      <span>BALANCE DUE</span>
                      <span>
                        {getCurrencySymbol()}{' '}
                        {calculateTotal().toLocaleString('en-IN', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                {(invoiceData.bankName || invoiceData.accountNumber) && (
                  <div className="mt-8">
                    <div className="font-semibold text-gray-700 mb-3">
                      Bank Details
                    </div>
                    <div className="text-gray-600 space-y-1">
                      {invoiceData.ifscCode && (
                        <div>IFSC Code- {invoiceData.ifscCode}</div>
                      )}
                      {invoiceData.accountNumber && (
                        <div>Account Number- {invoiceData.accountNumber}</div>
                      )}
                      {invoiceData.accountHolder && (
                        <div>Beneficiary Name- {invoiceData.accountHolder}</div>
                      )}
                      {invoiceData.bankName && (
                        <div>Bank Name- {invoiceData.bankName}</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Help Text */}
      <div className="fixed bottom-4 right-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-lg text-sm max-w-xs">
        💡 <strong>Tip:</strong> Click on any text to edit it directly. All
        changes are auto-saved every 30 seconds.
      </div>
    </div>
  );
}
