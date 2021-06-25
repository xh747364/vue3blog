/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare namespace Service {
  interface PostsList {
    data: postItem[] | string;
    code: number;
  }

  type postItem = {
    _id: string;
    title: string;
    content: string;
    categories: string[];
    tags: string[];
    createDate: string;
    updateDate: string;
  }
}

declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/preview'
declare module '@kangc/v-md-editor/lib/theme/github.js'
declare module '@kangc/v-md-editor/lib/theme/vuepress.js'
