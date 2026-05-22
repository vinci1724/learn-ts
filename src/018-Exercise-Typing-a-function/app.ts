// Enum ограничивает статус вопроса одним из разрешенных значений.
enum QuestionStatus {
  Published = 'dublished',
  Draft = 'draft',
  Deleted = 'deleted',
}

// req описывает тело запроса, Promise - структуру будущего ответа.
const _getFaqs = async (req: {
  topicId: number;
  status: QuestionStatus;
}): Promise<{
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: QuestionStatus;
}> => {
  // Отправляем типизированный запрос в JSON-формате.
  const res = await fetch('faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });

  // json() возвращает данные из ответа, которые ожидаем в описанной выше форме.
  const data = await res.json();
  return data;
};

/* Запрос */
/*
{
  "topicId": 5,
  "status": "published" // "draft", "deleted"
}
*/

/* Ответ */
/*
[
  {
    question: 'Как осуществляется доставка?',
    answer: 'быстро!',
    tags: [
      'popular',
      'new',
    ],
    likes: 3,
    status: 'published',
  },
];
*/
