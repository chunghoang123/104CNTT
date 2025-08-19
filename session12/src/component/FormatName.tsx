const user = {
  firstName: "Nguyễn Văn",
  lastName: "Nam",
};

type User = {
  firstName: string;
  lastName: string;
};
function formatName(user: User) {
  return `${user.firstName} ${user.lastName}`;
}

export function FormatName() {
  return <h4>Họ và Tên: {formatName(user)}</h4>;
}
