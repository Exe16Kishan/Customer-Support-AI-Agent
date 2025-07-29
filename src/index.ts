import { workflow } from "./worflow"

const main = async()=>{
    const result = await workflow.invoke({query:"i want to send mail"})
    console.log(result)
}

main()
