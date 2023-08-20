import { useState } from 'react'
import './App.css'


function App()
{
	let message:any
	let messageList:any
	let setMessage:any
	let setMessageList:any
	[message,setMessage]=useState([]);
	[messageList,setMessageList]=useState();
	function SendMessage()
	{
		let input:any
		input=document.querySelector(".messageInput");
		if(input.value=="")return;
		let arr:any
		arr=message;
		arr.push(input.value);
		setMessage(arr);
		let tarr:Array<any>=[];
		for(let i=0;i<message.length;i++)
		{	
			tarr[i]=<li className="inmessage">{message[i]}</li>
		}
		setMessageList(tarr)
		let t:any
		t=document.querySelector(".messagebox")
		t.scroll(0,t.scrollHeight);
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
										<li className="outmessage">hello</li>
										{messageList}
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
