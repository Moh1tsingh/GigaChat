import { useState,useEffect } from 'react'
import './App.css'


function App()
{
	const URL='http://127.0.0.1:8000/';
	let message:any
	let messageList:any
	let setMessage:any
	let setMessageList:any
	[message,setMessage]=useState([]);
	[messageList,setMessageList]=useState();
	useEffect(()=>{
		let t=document.querySelector(".end")
		t.scrollIntoView()
		})
	function SendMessage()
	{
		let input:any
		input=document.querySelector(".messageInput");
		input.disabled=true;
		let b:any
		b=document.querySelector("button")
		b.disabled=true;
		if(input.value=="")return;
		const DATA={
			q:input.value
		};
		const othePram={
			headers:{
				"content-type":"application/json;charset=UTF-8"
			},
			body:JSON.stringify(DATA),
			method:"POST",
		};
		let response:any
		fetch(URL,othePram).then(data=>{return data.text()}).then(res=>{
				response=res

				let arr:any
				arr=message;
				arr.push([0,input.value]);
				setMessage(arr);
				let tarr:Array<any>=[];
				for(let i=0;i<message.length;i++)
				{	
					tarr[i]=<li className="inmessage">{message[i][1]}</li>
				}
				setMessageList(tarr)

				arr.push([1,response])
				setMessage(arr)
				for(let i=0;i<message.length;i++)
				{	
					tarr[i]=<li className={message[i][0]==0?"inmessage":"outmessage"}>{message[i][1]}</li>
				}
				setMessageList(tarr)
				let t:any
				t=document.querySelector(".end")
				t.scrollIntoView()
				b.disabled=false;
				input.disabled=false;
			}).catch(error=>console.log(error))
	}
	function resizeTextArea()
	{
		let t:any
		t=document.querySelector(".messageInput");
		t.style.height=5+"px"
		t.style.height=t.scrollHeight+"px"
	}
  return (
		<>
			<div>
					<div className="main">
						<div className="chatbox">

								<div className="messagebox">
								  <ul>
										{messageList}
										<li className="end"></li>
									</ul>
								</div>
								<div className="inputbox">
									<textarea className="messageInput" rows={1} onKeyUp={resizeTextArea}></textarea>
									<button onClick={SendMessage}>Send</button>
								</div>

						</div>
				</div>
			</div>
		</>
  )
}

export default App
