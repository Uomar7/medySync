/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

document.addEventListener('deviceready', () => {

     let form = document.getElementById('form');
     const nameSpace = document.getElementById('answers');

     form.addEventListener('submit',(e)=>{
          let name = document.getElementById('name').value;
          // alert(`Hey there ${name}`);

          let nom = document.createTextNode(`${name} online...`);
          let par = document.createElement('p');
          par.appendChild(nom);
          e.preventDefault();
          nameSpace.appendChild(par);
     });
     document.getElementById('name').value = '';
     });
