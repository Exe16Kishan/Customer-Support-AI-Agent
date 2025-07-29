import { Annotation } from "@langchain/langgraph";

export const queryType = Annotation.Root({
    query:Annotation<string>(),
    email:Annotation<string>(),
    customerForward:Annotation<string>(),
    solution:Annotation<string>()
})

export type state = typeof queryType.State