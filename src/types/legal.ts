export type LegalSection = {
  title: string;
  paragraphs?: string[];
  definitions?: { term: string; def: string }[];
};
