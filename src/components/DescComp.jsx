import { Box, List, ListItem, Text } from "@mantine/core";
import React from "react";
import listIcon from "../assets/icon-list.svg";
import Image from "next/image";
import InputComp from "./InputComp";

export default function DescComp() {
  return (
    <>
      <Box className="order-2 min-w-0 p-6 sm:p-8 md:order-1 md:flex-1 md:p-8">
        <Text mb={20} size="xl" className="text-3xl md:text-5xl" fw="bolder">
          Stay updated!
        </Text>
        <Text size="sm" className="text-gray-600" mb={20}>
          Join 60,000+ product managers receiving monthly updates on:
        </Text>
        <List
          icon={
            <Image
              src={listIcon}
              alt="list icon"
              width={20}
              height={20}
              style={{ minWidth: "20px", minHeight: "20px" }}
            />
          }
          mb={20}
        >
          <ListItem
            styles={{
              itemWrapper: {
                alignItems: "flex-start",
              },
            }}
          >
            Product discovery and building what matters
          </ListItem>
          <ListItem
            styles={{
              itemWrapper: {
                alignItems: "flex-start",
              },
            }}
          >
            Measuring to ensure updates are a success
          </ListItem>
          <ListItem
            styles={{
              itemWrapper: {
                alignItems: "flex-start",
              },
            }}
          >
            And much more!
          </ListItem>
        </List>
        <InputComp />
      </Box>
    </>
  );
}
