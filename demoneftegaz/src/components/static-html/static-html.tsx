import React, { useEffect, useState } from "react";

type StaticRenderProps = {
    url: string
}

const StaticHtml = ({url}: StaticRenderProps) => {
    const [content, setContent] = useState("")

    const loadData = (url: string) => {
        fetch(url)
          .then(function (response) {            
            if(response.ok){
              return response.text();
            }
            throw new Error('Content not found');
          })
          .then((data) => {            
            setContent(data);
          })
      }

    useEffect(() => {
        loadData(url)
    }, [url])


    return React.createElement("body", {dangerouslySetInnerHTML: {__html: content}})
  }
    
  export default StaticHtml;