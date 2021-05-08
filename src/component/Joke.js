import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Spinner,
  Text,
  Center,
  HStack,
} from "@chakra-ui/react";
import { getJoke } from "../api";

const Joke = () => {
  const [iconUrl, setIconUrl] = useState();
  const [joke, setJoke] = useState();

  useEffect(() => {
    getMeJoke();
  }, []);

  const getMeJoke = () => {
    getJoke().then((jsonData) => {
      const { icon_url, value } = jsonData;
      setJoke(value);
      setIconUrl(icon_url);
    });
  };

  return joke && iconUrl ? (
    <div className="bg">
      <Center mt="10%">
        <HStack spacing={4}>
          <Avatar name="url" src={iconUrl} />
          <Text fontSize="md">{joke}</Text>
        </HStack>
      </Center>
      <Center>
        <Button
          variant="outline"
          colorScheme="blue"
          size="sm"
          onClick={getMeJoke}
        >
          Get Another Joke
        </Button>
      </Center>
    </div>
  ) : (
    <Center mt={100}>
      <Spinner
        color="red.500"
        size="xl"
        thickness="8px"
        speed="0.65s"
        emptyColor="gray.200"
      />
    </Center>
  );
};

export default Joke;
