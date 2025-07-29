import { END, START, StateGraph } from "@langchain/langgraph";
import { queryType } from "../state/stateAnnotion";
import { queryNode } from "../nodes/queryNode";
import { emailNode } from "../nodes/emailNode";
import { solutionNode } from "../nodes/commonSolution";
import { conditionalNode } from "../nodes/conditonalNode";


export const workflow = new StateGraph(queryType)
.addNode("queryy",queryNode)
.addNode("emaill",emailNode)
.addNode("solutionn",solutionNode)
.addEdge(START,"queryy")
.addConditionalEdges("queryy",conditionalNode,["emaill","solutionn"])
.addEdge("emaill",END)
.addEdge("solutionn",END)
.compile()