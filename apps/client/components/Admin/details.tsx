import { Card, Flex, Group, Image } from "@mantine/core";
import type { AppUser } from "../../types/app-user";
import PrizeFunderCard from "../Prize/prizepage/prizeFunderCard";
import { TextEditor } from "../richtexteditor/textEditor";

export default function ViewDetails({
  admins,
  user,
  description,
  images,
  submission,
  title,
  voting,
}: {
  images: string[];
  title: string;
  description: string;
  admins: string[];
  voting: number;
  submission: number;
  user: AppUser;
}) {
  return (
    <Flex direction="column" gap="sm" my="xl">
      {images.length > 0
        ? images.map((image) => (
            <Image src={image} height={160} alt="Image" key={image} />
          ))
        : null}
      <div>
        <h2>{title}</h2>
        <TextEditor disabled richtext={description} />
      </div>
      <PrizeFunderCard name={user.name} email={user.email} />
      <div>
        Admin wallets
        {admins.map((admin, index) => (
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            key={admin}
            withBorder
            mt="sm"
          >
            {index + 1}. {admin}
          </Card>
        ))}
        <Group grow my="sm">
          <Card>Voting days: {voting}</Card>
          <Card>Submission days: {submission}</Card>
        </Group>
      </div>
    </Flex>
  );
}
