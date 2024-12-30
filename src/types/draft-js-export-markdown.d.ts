declare module "draft-js-export-markdown" {
    import { RawDraftContentState } from "draft-js";
  
    export function stateToMarkdown(content: RawDraftContentState): string;
  }
  