#! /user/bin/env  node
import inquirer from "inquirer";
import chalk from 'chalk'

let todolist:string[]=[]

let starting= async ()=>{
    let addlist=await inquirer.prompt([{
        message:"do you want to add some thing in your todo list",
        type:"list",
        name:'add',
        choices:['YES','NOO','VIEW TODOLIST','REMOVE SOMETHING IN TODO LIST']
    }])
    if(addlist.add=='YES'){
        let adding=await inquirer.prompt([{
            message:"PLEASE ENTER SOMETHING  WHICH YOU WANT TO ADD IN YOUR TODOLIST...........",
            type:'input',
            name:"add"
        }])
        todolist.push(adding.add)
        if(todolist.includes('')){
            let value=todolist.indexOf('')
            todolist.splice(value,1)



        }
      //  console.log(chalk.green("your todo list is here "));
        
    //   for(let i=0;i<todolist.length;i++){
     //   console.log( chalk.yellow.bold(`${i}: ${todolist[i]}`))
       // }
        await starting()
        

    }
    else if(addlist.add=='VIEW TODOLIST'){
        if(todolist.length==0){
            console.log(chalk.bold.red("YOUR TODOLIST IS EMPTY   PLEASE ADD SOME THING IN YOUR TODOLIST "))
         await starting()

        }
        else{
        console.log(chalk.yellow.italic('      YOUR TODOLIST IS HERE'))
        for(let i=0;i<todolist.length;i++){
            if(todolist.length==0){
                console.log(chalk.red("EMPTY LIST "))
            }
            else{
            console.log(chalk.green.italic(`   ${i}:${todolist[i]}`))
            }

        }
        await starting()
    }
}
else if(addlist.add=='REMOVE SOMETHING IN TODO LIST'){
    if(todolist.length=0){
        console.log(chalk.red('YOUR TODO LIST EMPTY KINDLY FIRSTLY ADD SOME THING IN YOUR TODO LIST '));
        await starting()
    }
    else{
    let sentence=await inquirer.prompt([{
        message:"please enter the sentence which you want to dlt from todo list",
        type:"input",
        name:"dlt"
    }])
    if(todolist.includes(sentence.dlt)){
        console.log(324567);
        

    }
    
}

}

    else if(addlist.add=='NOO'){
        console.log(' THE END ')
        let repeat=await inquirer.prompt([{
            message:"DO YOU WANT TO AGAIN ADD IN YOUR TODOLIST",
            name:"again",
            type:"list",
            choices:['yes','no']
        }])
        if(repeat.again=='yes'){
            await starting()
        }
        else if(repeat.again=='no'){
            console.log('THANKS FOR TODO LIST ')
        }
        
       
        

    }
    

} 


starting()

