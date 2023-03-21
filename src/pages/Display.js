
import Header from '../components/Header'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Display(){
    const [customerList, setCustomerList]=useState([])
    let user_id =useState([])
    let duser_id =useState('')
    const [oneCustomerList, setOneCustomerList]=useState([])
    useEffect(()=>{
        Axios.get('http://localhost:3001/api/display_details').then((response)=>{
            //console.log(response.data);
            setCustomerList(response.data)
        }
        )
    },[])

    const updateDetails = () =>{
        Axios.post('http://localhost:3001/api/select_one', {
            user_id: user_id
        }).then((response)=> {
            {customerList.map((val)=>{
                { user_id = val.id }
            })}
            setOneCustomerList(response.data)
            
        });
    };

    if (oneCustomerList != "")
    {
        this.props.history.push('http://localhost:3001/edit?user_id'+user_id);
    }

    const deleteDetails = () =>{
        Axios.post('http://localhost:3001/api/delete_one', {
            duser_id: duser_id
        }).then(()=> {
            
            window.location.replace('http://localhost:3001/display');
        });
    };
    return (
        <>
        <Header />
        <div class="container">
            <br /><br />
            <table class="table table-stripped table-seconday table-bordered">
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Contact
                    </th>
                    <th>
                        City
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Update
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
                {customerList.map((val)=>{
                    return  <tr>
                                <td>
                                    
                                    {val.name}
                                </td>
                                <td>
                                    {val.email}
                                </td>
                                <td>
                                    {val.contact}
                                </td>
                                <td>
                                    {val.city}
                                </td>
                                <td>
                                    {val.age}
                                </td>
                                <td>
                                    
                                        <p class="d-none">
                                        { user_id = val.id }
                                        </p>
                                         
                                    <a href={'/edit?user_id='+user_id} >
                                    <button type="button" class="btn btn-success btn-block gradient-custom-4 text-body" onClick={updateDetails} >Update</button>
                                    </a>
                                </td>
                                <td>
                                    <form>
                                    <p class="d-none">
                                        { duser_id = val.id }
                                        </p>
                                    <button type="button" class="btn btn-danger btn-block gradient-custom-4 text-body" onClick={deleteDetails} >Delete</button>
                                    </form>
                                </td>
                            </tr>
                })}
                   
            </table>
            
    </div>
    </>
    )
}