"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  LuBot,
  LuCreditCard,
  LuGauge,
  LuLanguages,
  LuLayoutTemplate,
  LuLifeBuoy,
} from "react-icons/lu";

const Features = () => {
  return (
    <Flex
      id="features"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={2}
      maxW={1200}
      mx={"auto"}
    >
      <Heading
        fontSize={{
          base: 32,
          md: 48,
        }}
        textAlign={"center"}
      >
        Your Trusted AI Companion
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={10}
        my={10}
      >
        {Cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title}>
            {card.text}
          </Card>
        ))}
      </Grid>
    </Flex>
  );
};

interface CardProps {
  icon: IconType;
  title: string;
  children: ReactNode;
}

const Card = ({ icon, title, children }: CardProps) => (
  <Flex maxW={350} role="group">
    <Icon
      as={icon}
      fontSize={48}
      mr={5}
      p={2}
      bg={StargateColors.lightGrey}
      rounded={"md"}
      strokeWidth={1.5}
      transition={"all 0.25s ease"}
      _groupHover={{
        bg: StargateColors.black,
        color: StargateColors.white,
        shadow: "dark-lg",
        transform: "scale(1.1)",
      }}
    />
    <Flex direction={"column"} gap={1}>
      <Heading fontSize={"xl"}>{title}</Heading>
      <Text fontSize={"small"} color={StargateColors.grey}>
        {children}
      </Text>
    </Flex>
  </Flex>
);

const Cards = [
  {
    icon: LuBot,
    title: "Personality Analysis",
    text: "Understand your unique traits with AI-driven analysis that reveals key aspects of your personality.",
  },
  {
    icon: LuGauge,
    title: "Customized Roadmap",
    text: "Get a personalized action plan to help you leverage your strengths and improve areas of growth.",
  },
  {
    icon: LuCreditCard,
    title: "Behavioral Insights",
    text: "Dive deep into your behaviors and preferences for better self-awareness and decision-making.",
  },
  {
    icon: LuLanguages,
    title: "Career Guidance",
    text: "Discover career paths and opportunities that align with your personality and strengths.",
  },
  {
    icon: LuLayoutTemplate,
    title: "Communication Style Evaluation",
    text: "Learn how you communicate and how to optimize your interactions with others.",
  },
  {
    icon: LuLifeBuoy,
    title: "Progress Tracking",
    text: "Track your personal growth over time with regular updates and actionable feedback.",
  },
];

export default Features;
