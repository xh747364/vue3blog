import http from '@/plugins/http';
import { URLS } from './url';
import { PageTable } from '@/interface/PageTable';
import { ArchiveParams, ArchiveId, ArchiveItem } from '@/interface/Archive';
import { AxiosPromise } from 'axios';
import { ThTagsList, ThTagsListDetail } from '../interface/ThTags';
import { RequestRes } from '@/interface/Request';

//  获取统计数据
export const GetPageTable = (): AxiosPromise<PageTable> => {
	return http.request<PageTable>({
		url: URLS.GetPageTable,
		method: 'get'
	});
};

//  获取文章列表
export const GetArchiveList = (params: ArchiveParams): AxiosPromise<ArchiveItem> => {
	return http.request<ArchiveItem>({
		url: URLS.GetArchiveList,
		method: 'get',
		params: params
	});
};

//  获取文章详情
export const GetArchiveDetail = (params: ArchiveId): AxiosPromise<ArchiveItem> => {
	return http.request<ArchiveItem>({
		url: URLS.GetArchive + params,
		method: 'get'
	});
};

// 分类列表
export const GetThList = (): AxiosPromise<ThTagsList> => {
	return http.request<ThTagsList>({
		url: URLS.GetThList,
		method: 'get'
	})
}

// 分类列表详情
export const GetThListDetail = (params: string | string[]): AxiosPromise => {
	return http.request({
		url: URLS.GetThList + params,
		method: 'get',
	})
}

// 标签列表
export const GetTagsList = (): AxiosPromise<ThTagsList> => {
	return http.request<ThTagsList>({
		url: URLS.GetTagsList,
		method: 'get'
	})
}

// 标签列表
export const GetTagsListDetail = (): AxiosPromise=> {
	return http.request({
		url: URLS.GetTagsDetail,
		method: 'get'
	})
}

