import {
    Box,
    Card,
    Text,
    Flex,
    Link,
    Heading,
    Separator,
} from "@radix-ui/themes";

interface contentProps {
    title: string;
    location: string;
    googleMapsUrl: string;
    startDate: string;
    endDate: string;
    description: string;
    imageUrl: string;
}

const Content = (props: contentProps) => {
    return (
        <Box>
            <Card my={"8"} className="p-6">
                <Flex
                    direction={{
                        initial: "column",
                        sm: "row",
                    }}
                >
                    <img
                        className="w-full rounded-md p-4 md:w-1/3"
                        src={props.imageUrl}
                        alt={props.title}
                    />

                    <Flex direction="column" m={"4"}>
                        <Flex
                            mt={{
                                initial: "1",
                                sm: "6",
                            }}
                            mb={"3"}
                            align={"center"}
                        >
                            <Text mr={"4"} size={"6"} weight={"medium"}>
                                {props.location}
                            </Text>
                            <Link
                                size={"3"}
                                href={props.googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on Google Maps
                            </Link>
                        </Flex>
                        <Heading as="h1" size="9" weight="bold" mb={"4"}>
                            {props.title}
                        </Heading>
                        <Text size="3" weight={"medium"}>
                            {props.startDate} - {props.endDate}
                        </Text>
                        <Text size={"3"} weight={"light"} mt="2" mb={"6"}>
                            {props.description}
                        </Text>
                    </Flex>
                </Flex>
            </Card>
            <Separator size={"4"} />
        </Box>
    );
};

export default Content;
