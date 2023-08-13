import EditTopicForm from '@/app/component/EditTopicForm'
import React from 'react'

const page = ({params}) => {
  const {id}=params;
  console.log("id=",id);
  return (<div> <EditTopicForm id={id}/></div>)
}

export default page