import styled from "styled-components";
import { spacing } from "../../../design/index";
import { Container } from "@mui/material";

export const AidDisplayContainer = styled(Container)`
	padding-top: ${spacing("lg")};
	padding-bottom: ${spacing("lg")};
`;

export const InputsWrapper = styled(Container)`
	padding-top: ${spacing("lg")};
	padding-bottom: ${spacing("lg")};
`;

export const InputContainer = styled.div`
	margin-bottom: ${spacing("sm")};
`;
