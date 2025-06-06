import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({
  auth: 'ntn_c4497409505aginMnjvFo7VGnHJpzReUOwhRutlEkvbc5w',
});

export async function GET() {
  try {
    // Search for all content (no filter to get everything)
    const allResponse = await notion.search({});

    // Also specifically search for databases
    const databaseResponse = await notion.search({
      filter: {
        property: 'object',
        value: 'database',
      },
    });

    // Also specifically search for pages
    const pageResponse = await notion.search({
      filter: {
        property: 'object',
        value: 'page',
      },
    });

    console.log('All results:', allResponse.results.length);
    console.log('Database results:', databaseResponse.results.length);
    console.log('Page results:', pageResponse.results.length);

    return NextResponse.json({
      success: true,
      all: allResponse.results,
      databases: databaseResponse.results,
      pages: pageResponse.results,
      summary: {
        total: allResponse.results.length,
        databases: databaseResponse.results.length,
        pages: pageResponse.results.length,
      },
    });
  } catch (error) {
    console.error('Notion API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'An error occurred',
        errorDetails: error,
      },
      { status: 500 }
    );
  }
}
