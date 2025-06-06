'use client';

import { useEffect, useState } from 'react';

export default function NotionPage() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotionData() {
      try {
        setLoading(true);
        const response = await fetch('/api/notion');
        const responseData = await response.json();

        if (responseData.success) {
          setData(responseData);
        } else {
          setError(responseData.error);
          console.error('API Error:', responseData.errorDetails);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchNotionData();
  }, []);

  if (error) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Notion Content</h1>
        <p>Loading...</p>
      </div>
    );
  }

  const renderItem = (item: any) => (
    <div key={item.id} className="border p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
          {item.object}
        </span>
        {item.object === 'page' && (
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
            {item.parent?.type}
          </span>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-2">
        {item.object === 'database'
          ? item.title?.[0]?.plain_text || 'Untitled Database'
          : item.properties?.title?.title?.[0]?.plain_text || 'Untitled Page'}
      </h2>

      <p className="text-gray-600 text-sm mb-1">ID: {item.id}</p>
      <p className="text-gray-600 text-sm mb-1">
        Created: {new Date(item.created_time).toLocaleDateString()}
      </p>
      <p className="text-gray-600 text-sm">
        Last edited: {new Date(item.last_edited_time).toLocaleDateString()}
      </p>

      {item.url && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:underline text-sm"
        >
          Open in Notion →
        </a>
      )}
    </div>
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notion Content</h1>

      {/* Summary */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Summary</h2>
        <p>Total items: {data?.summary?.total || 0}</p>
        <p>Databases: {data?.summary?.databases || 0}</p>
        <p>Pages: {data?.summary?.pages || 0}</p>
      </div>

      {/* All Content */}
      {data?.all && data.all.length > 0 ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">All Content</h2>
          {data.all.map(renderItem)}
        </div>
      ) : (
        <p>
          No content found. Make sure your integration has access to pages or
          databases.
        </p>
      )}

      {/* Databases Section */}
      {data?.databases && data.databases.length > 0 && (
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Databases</h2>
          {data.databases.map(renderItem)}
        </div>
      )}

      {/* Pages Section */}
      {data?.pages && data.pages.length > 0 && (
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Pages</h2>
          {data.pages.map(renderItem)}
        </div>
      )}
    </div>
  );
}
