export const FETCH_VIDEO_DETAIL = "FETCH_VIDEO_DETAIL";
export const SAVE_VIDEO_DETAIL = "SAVE_VIDEO_DETAIL"

export interface Video{
    ThumbnailURL: string;
    VideoLength: number;
    VideoTitle: string;
    WebURL: string;
    isFavourite: boolean;
}

