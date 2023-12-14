export interface CommentType {
  id: number;
  text: string;
}

export default <CommentType[]>[
  {
    id: 1,
    text: "First comment",
  },
  {
    id: 2,
    text: "Second comment",
  },
  {
    id: 3,
    text: "Third comment",
  },
];
