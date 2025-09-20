import type { Book } from "../types/Book.ts";

// irl this would fetch from an API so I set it as async
export const getBooks = async (): Promise<Book[]> => {
    return [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald"
        },
        {
            id: 2,
            title: "Silent Spring",
            author: "Rachel Carson"
        },
        {
            id: 3,
            title: "One Hundred Years of Solitude",
            author: "Gabriel Garcia Marquez"
        }
    ];
}