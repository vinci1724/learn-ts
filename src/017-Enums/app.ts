// Enum задает набор именованных статусов вместо чисел или строк.
enum StatusCode {
  SUCCESS,
  IN_PROCESS,
  FAILED,
}

const res = {
  message: 'Платеж успешен',
  // В объекте храним конкретный статус из перечисления.
  statusCode: StatusCode.SUCCESS,
};

// Сравниваем с enum-значением, а не с "магическим" числом.
if (res.statusCode === StatusCode.SUCCESS) {
  console.log('Успешно');
}
