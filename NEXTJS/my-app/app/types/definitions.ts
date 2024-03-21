// 전역 단일 게시글 타입 정의
export type Article = {
  article_id?: number;
  article_type_code?: number;
  board_type_code?: number;
  contents: string | null; // 공용유형 정의로 여러가지 타입을 동시지원할 때 사용(union 타입)
  ip_address?: string;
  is_display_code: number;
  reg_date?: string;
  reg_member_id?: number;
  edit_date?: string | null;
  edit_member_id?: number | null;
  title: string;
  view_count?: number;
};
// 전역 게시글 타입 인터페이스
export interface IArticle {
  article_id?: number;
  board_type_code?: number;
  article_type_code?: number;
  is_display_code: number;
  title: string;
  contents: string | null;
}

export type Member = {
  member_id?: number;
  email: string;
  password: string;
  name?: string;
  profile_img_path?: string | null;
  telephone?: string | null;
  entry_type_code?: number;
  use_state_code?: number;
  reg_date?: string;
  reg_member_id?: number;
  edit_date?: string | null;
  edit_member_id?: number | null;
};
