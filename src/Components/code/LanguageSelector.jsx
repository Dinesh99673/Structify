import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
  } from "@chakra-ui/react";
  import { LANGUAGE_VERSIONS } from "../Services/constants";
  
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const ACTIVE_COLOR = "blue.400";
  
  const LanguageSelector = ({ language, onSelect,handleRunCode }) => {
    return (
      <Box ml={2} mb={4}>
        <Text mb={2} fontSize="lg">
          Language:
        </Text>
        <Menu isLazy>
          <MenuButton as={Button}>{language}</MenuButton>
          <MenuList bg="#110c1b">
            {languages.map(([lang, version]) => (
              <MenuItem
                key={lang}
                color={lang === language ? ACTIVE_COLOR : ""}
                bg={lang === language ? "gray.900" : "transparent"}
                _hover={{
                  color: ACTIVE_COLOR,
                  bg: "gray.900",
                }}
                onClick={() => onSelect(lang)}
              >
                {lang}
                &nbsp;
                <Text as="span" color="gray.600" fontSize="sm">
                  ({version})
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Button
              onClick={handleRunCode}
              variant="outline"
              display={{base:'inline',md:"none"}}
              colorScheme="green"
              ml={2}
            >
              Run Code
            </Button>
      </Box>
    );
  };
  export default LanguageSelector;