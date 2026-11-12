export interface MaterialBodySection {
  title: string;
  content: string;
}

export interface MaterialDetail {
  title: string;
  description: string;
  tableOfContents: string[];
  summary: string;
  bodySections: MaterialBodySection[];
  tags: string[];
}
