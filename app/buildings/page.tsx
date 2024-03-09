import { createClient } from "@/utils/supabase/server";
import { Flex, Text, Button } from "@radix-ui/themes";

export default async function Buildings() {
  const supabase = createClient();
  const { data: buildings } = await supabase.from("buildings").select();

  return (
    <Flex direction={"column"}>
      <Text>{JSON.stringify(buildings, null, 2)}</Text>
      <Text>Buildings</Text>
      <Button>Howdy</Button>
    </Flex>
  );
}
