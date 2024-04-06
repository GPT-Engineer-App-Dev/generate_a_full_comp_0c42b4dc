import React from "react";
import { ChakraProvider, Box, Heading, Text, Button, VStack, HStack, Container, Divider, useDisclosure } from "@chakra-ui/react";
import { FaPlay, FaRobot, FaBrain } from "react-icons/fa";

// Placeholder for a video background component
const VideoBackground = ({ src }) => {
  // In a real application, you would use a <video> tag with controls and proper attributes
  return <Box pos="fixed" top="0" left="0" h="full" w="full" bg={`url(${src}) center/cover no-repeat`} zIndex="-1" opacity="0.3" />;
};

const Feature = ({ title, icon, children }) => {
  return (
    <VStack spacing={4} alignItems="flex-start">
      <HStack>
        {icon}
        <Heading size="md">{title}</Heading>
      </HStack>
      <Text>{children}</Text>
    </VStack>
  );
};

const Index = () => {
  const { isOpen, onToggle } = useDisclosure();

  // Placeholder for an API call to fetch AI-related content
  const fetchAIContent = async () => {
    // In a real application, you might use fetch or axios to get data from an API
    console.log("Fetching AI content from the API...");
  };

  return (
    <ChakraProvider>
      <Box position="relative" overflow="hidden">
        <VideoBackground src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzEyMzg0MDQyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
        <Container maxW="container.xl" pt={10}>
          <VStack spacing={8}>
            <Heading as="h1" size="2xl" textAlign="center">
              Cutting Edge AI Technology
            </Heading>
            <Text textAlign="center">Explore the latest advancements in artificial intelligence and machine learning.</Text>
            <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid" onClick={onToggle}>
              Watch Intro Video
            </Button>
            <Divider />
            <HStack spacing={10} divider={<Divider orientation="vertical" />}>
              <Feature title="Machine Learning" icon={<FaBrain size="24px" />}>
                Dive deep into neural networks and predictive analytics.
              </Feature>
              <Feature title="Robotics" icon={<FaRobot size="24px" />}>
                Discover how AI is revolutionizing automation and robotics.
              </Feature>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
