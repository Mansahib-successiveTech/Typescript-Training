import Image from "next/image";

const UserCard = ({
  name,
  email,
  avatar,
}: {
  name: string;
  email: string;
  avatar: string;
}) => {
  return (
    <div
      style={{
        background: "white",
        color: "black",
        display: "block",

        width: "20%",
      }}
    >
      <h2>name:{name}</h2>
      <h3>email:{email}</h3>
      <Image src={avatar} width={100} height={100} alt="image"></Image>
    </div>
  );
};

export default UserCard;
