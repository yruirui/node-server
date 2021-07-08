let n=1
getPage.onclick= ()=>{
    const request=new XMLHttpRequest()
    request.open('get',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status===200){
                const array=JSON.parse(request.response)
                array.forEach(item => {
                    const li=document.createElement("li")
                    li.textContent=item.id
                    const afu=document.getElementById('aul')
                    afu.appendChild(li)
                });
            }
            else{
                alert('请求page.json失败')
            }
            n+=1
        }
    }
    request.send()
}
getCss.onclick = () =>{
    const request=new XMLHttpRequest()
    request.open("get","/style.css")
    request.onreadystatechange=()=>{  
        if(request.readyState === 4){
            if( request.status === 200){            
                const style=document.createElement('style')
                style.innerHTML=request.response
                document.head.appendChild(style)
                }else{
                    alert('请求style.css失败')
                }
        }    
        
    }
    request.send()
}
getJs.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('get','/2.js')   
    request.onreadystatechange=()=>{
        if(request.readyState === 4){
            if(  request.status === 200){            
                const js=document.createElement('script')
                js.innerHTML=request.response
                document.body.appendChild(js)
            }else{
                alert('请求2.js失败')
            }
        }        
        
    }
    request.send()
}
getHtml.onclick=()=>{
    const request= new XMLHttpRequest()
    request.open('get','/2.html')
    //下载完成但是不知道响应码是2开头还是4开头
    request.onreadystatechange=()=>{
        if(request.readyState === 4){
            if(request.readyState === 4 && request.status === 200){
                //创建一个div标签
            const div=document.createElement('div')
            //将获取来的内容写入div标签
            div.innerHTML=request.response
            //将标签插入HTML中
            document.body.appendChild(div)
            }else{
                alert('请求2.html失败')
            }
        }
        
    }
    request.send()
}
getXml.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('get','/4.xml')     
    request.onreadystatechange=()=>{  
        if(request.readyState === 4){
            if( request.status === 200){            
                const dom=request.responseXML
                console.log(dom)
                const text=dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }else{
                alert('请求4.xml失败')
            }
        }else{}     
        
    }
    request.send()
}
getJson.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('get','/4.json')     
    request.onreadystatechange=()=>{  
        if(request.readyState === 4){
            if( request.status === 200){            
               const object = JSON.parse(request.response)
               afu.textContent=object.name
                
            }else{
                alert('请求4.json失败')
            }
        }else{}     
        
    }
    request.send()
}

