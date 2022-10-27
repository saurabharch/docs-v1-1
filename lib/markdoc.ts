import Banner from "../components/common/Banner/Banner";
import { Callout } from "../components/Callout";
import Divider from "../components/common/Divider/Divider";
import InlineCallout from "../components/common/InlineCallout/InlineCallout";
import Note from "../components/common/Note/Note";
import YouTube from "../components/common/Youtube/Youtube";
import CodeBlock from "../components/CodePreview/CodeBlock/CodeBlock";
import CodeInfo from "../components/CodePreview/CodeInfo/CodeInfo";
import CodeInfoContainer from "../components/CodePreview/CodeInfoContainer/CodeInfoContainer";
import CodePreview from "../components/CodePreview/CodePreview";
import Code from "../components/common/Code/Code";
import { Heading } from "../components/Heading/Heading";

import * as allTags from "../markdoc/tags";
import * as allNodes from "../markdoc/nodes";
import * as allFunctions from "../markdoc/functions";
import { Config, ConfigFunction, NodeType, Schema } from "@markdoc/markdoc";

const tags = allTags as unknown as Record<string, Schema>;
const nodes = allNodes as unknown as Partial<Record<NodeType, Schema>>;
const functions = allFunctions as unknown as Record<string, ConfigFunction>;

export const components = {
  Banner,
  Callout,
  Divider,
  InlineCallout,
  Note,
  YouTube,
  CodeBlock,
  CodeInfo,
  CodeInfoContainer,
  CodePreview,
  Code,
  Heading,
};

export const configs: Config = {
  tags,
  nodes,
  functions,
};
