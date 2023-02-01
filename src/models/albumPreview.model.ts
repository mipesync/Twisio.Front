export interface AlbumPreviewModel {
    albumCover: string;
    username: string;
    avatar?: string;
    views: number;
    likes: number;
    isBookmark: boolean;
    isLiked: boolean;
    desc: string;
    title: string;
}