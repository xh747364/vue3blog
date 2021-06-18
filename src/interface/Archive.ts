export interface ArchiveItem {
	_id: string;
	title: string;
	content: string;
	categories: string[];
	tags: string[];
	createDate: string;
	updateDate: string;
}

export interface ArchiveParams {
    page: number;
}

export interface ArchiveId {
	id: string;
}