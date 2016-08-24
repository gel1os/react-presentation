import React, { Component } from 'react';
import Deck from "components/Deck.react";
import Slide from "components/Slide.react";
import Code from "components/Code.react";
import DocumentTitle from "react-document-title";
import ReactLogo from 'my-components/react-logo';
import LegoFace from 'my-components/lego-face';
import FuckYeah from 'my-components/fuck-yeah';
import ForeverAlone from 'my-components/forever-alone';
import RenderTree from 'my-components/render-tree';
import PleaseGuy from 'my-components/please-guy';
import DaLogo from 'my-components/da-logo';
import Author from 'my-components/author';
import LinClark from 'my-components/lin-clark';

// Prism JS configuration
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import "style!css!prismjs/themes/prism.css"; // Theme

import "css/theme.css";

const TOPIC = 'A guide to performance in React';

export default () =>
  <DocumentTitle title={TOPIC}>
    <Deck>
      <header className="caption">
        <h1>{TOPIC}</h1>
      </header>
      
      <Slide className="with-logo cover">
        <DaLogo position="center"/>
      </Slide>
      
      <Slide className="with-logo">
        <DaLogo />
        <h2 className="topic">
            {TOPIC}
        </h2>
        <Author />
      </Slide>
      <Slide className="with-logo">
        <DaLogo />
        <h2>Agenda</h2>
        <ol>
          <li>What is React and why would you consider using it?</li>
          <li>The basics of rendering in the browser.</li>
          <li>Minimizing and batching DOM changes with the virtual DOM.</li>
          <li>What you can do to make it faster.</li>
        </ol>
      </Slide>

      { /* What's React?  */ }

      <Slide className="with-logo">
        <DaLogo />
        <h2>What is React?</h2>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>What is React?</h2>
        <ReactLogo />
        <div>It's a JavaScript Library for creating UI.</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>What is React?</h2>
        <ReactLogo />
        <div>It's a JavaScript Library for creating UI.</div>
        <div>Developed by Facebook.</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>What is React?</h2>
        <ReactLogo />
        <div>It's a JavaScript Library for creating UI.</div>
        <div>Developed by Facebook.</div>
        <div>
          <strong>V</strong> in <strong>MVC</strong>.
        </div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>What is React?</h2>
        <ReactLogo />
        <div>It's a JavaScript Library for creating UI.</div>
        <div>Developed by Facebook.</div>
        <div>
          <strong>V</strong> in <strong>MVC</strong>.
        </div>
        <div style={{whiteSpace: 'nowrap'}}>You cannot build a fully functional dynamic application with React alone.</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>What is React?</h2>
        <ReactLogo />
        <div>It's a JavaScript Library for creating UI.</div>
        <div>Developed by Facebook.</div>
        <div>
          <strong>V</strong> in <strong>MVC</strong>.
        </div>
        <div style={{whiteSpace: 'nowrap'}}>
          You cannot build a fully functional dynamic application with React alone.
        </div>
        <div style={{whiteSpace: 'nowrap'}}>
          You might want to use <strong>JSX</strong> syntax for writing code.
        </div>
      </Slide>


      { /* Why would I want to use it? */ }

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Why would I want to use it?</h2>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Why would I want to use it?</h2>
        <div>Components... Components everywhere!</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Why would I want to use it?</h2>
        <div>Components... Components everywhere!</div>
        <div style={{whiteSpace: 'nowrap'}}>
          Your application is like a constructor, built with LEGO blocks!
        </div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Why would I want to use it?</h2>
        <div>Components... Components everywhere!</div>
        <div style={{whiteSpace: 'nowrap'}}>
          Your application is like a constructor, built with LEGO blocks!
        </div>
        <div>Splitting your app on encapsulated components gives you:</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Why would I want to use it?</h2>
        <div>Components... Components everywhere!</div>
        <div style={{whiteSpace: 'nowrap'}}>
          Your application is like a constructor, built with LEGO blocks!
        </div>
        <div>Splitting your app on encapsulated components gives you:</div>
        <ol>
          <li>Code reuse;</li>
        </ol>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Why would I want to use it?</h2>
        <div>Components... Components everywhere!</div>
        <div style={{whiteSpace: 'nowrap'}}>
          Your application is like a constructor, built with LEGO blocks!
        </div>
        <div>Splitting your app on encapsulated components gives you:</div>
        <ol>
          <li>Code reuse;</li>
          <li>Debugging;</li>
        </ol>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Why would I want to use it?</h2>
        <div>Components... Components everywhere!</div>
        <div style={{whiteSpace: 'nowrap'}}>
          Your application is like a constructor, built with LEGO blocks!
        </div>
        <div>Splitting your app on encapsulated components gives you:</div>
        <ol>
          <li>Code reuse;</li>
          <li>Debugging;</li>
          <li>Testing;</li>
        </ol>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Why would I want to use it?</h2>
        <div>Components... Components everywhere!</div>
        <div style={{whiteSpace: 'nowrap'}}>
          Your application is like a constructor, built with LEGO blocks!
        </div>
        <div>Splitting your app on encapsulated components gives you:</div>
        <ol>
          <li>Code reuse;</li>
          <li>Debugging;</li>
          <li>Testing;</li>
          <li>Separation of concerns.</li>
        </ol>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Why would I want to use it?</h2>
        <div>Components... Components everywhere!</div>
        <div style={{whiteSpace: 'nowrap'}}>
          Your application is like a constructor, built with LEGO blocks!
        </div>
        <div>Splitting your app on encapsulated components gives you:</div>
        <ol>
          <li>Code reuse;</li>
          <li>Debugging;</li>
          <li>Testing;</li>
          <li>Separation of concerns.</li>
        </ol>
        <LegoFace />
      </Slide>

      {/* What is React Component? */}

      <Slide className="with-logo">
        <DaLogo/>
        <h2>What is a React Component?</h2>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>What is a React Component?</h2>
        <div>That's an instance, that represents a part of User Interface.</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>What is a React Component?</h2>
        <div>That's an instance, that represents a part of User Interface.</div>
        <div>3 key features of component are:</div>
        <ol>
          <li>State;</li>
          <li>Properties;</li>
          <li>Lifecycle methods.</li>
        </ol>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>What is a React Component?</h2>
        <div>That's an instance, that represents a part of User Interface.</div>
        <div>3 key features of component are:</div>
        <ol>
          <li>State - <i>object</i> which tells component how to behave and be rendered under different conditions. It's an internal part of component.</li>
          <li>Properties;</li>
          <li>Lifecycle methods.</li>
        </ol>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>What is a React Component?</h2>
        <div>That's an instance, that represents a part of User Interface.</div>
        <div>3 key features of component are:</div>
        <ol>
          <li>State - <i>object</i> which tells component how to behave and be rendered under different conditions. It's an internal part of component.</li>
          <li>Properties - <i>data</i>, which is passed to component from outside.</li>
          <li>Lifecycle methods.</li>
        </ol>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>What is a React Component?</h2>
        <div>That's an instance, that represents a part of User Interface.</div>
        <div>3 key features of component are:</div>
        <ol>
          <li>State - <i>object</i> which tells component how to behave and be rendered under different conditions. It's an internal part of component.</li>
          <li>Properties - <i>data</i>, which is passed to component from outside.</li>
          <li>Lifecycle methods - internal <i>functions</i> which execute during the life of component. E.g. render(), componentWillMount(), componentDidMount(), etc...</li>
        </ol>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Example! Finally...</h2>
        <span>Counter</span>{' '}
        <a href="http://jsbin.com/borufu/12/edit?html,output" target="_jsbin">JS Bin</a>
      </Slide>

      { /* How does browser build the webpage?  */ }

      <Slide className="with-logo">
        <DaLogo/>
        <h2>How does browser build the webpage?</h2>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>How does browser build the webpage?</h2>
        <div>Main thread - in charge of JavaScript, DOM and layout.</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>How does browser build the webpage?</h2>
        <div>Main thread - in charge of JavaScript, DOM and layout.</div>
        <FuckYeah />
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>How does browser build the webpage?</h2>
        <div>Main thread - in charge of JavaScript, DOM and layout.</div>
        <FuckYeah />
        <ForeverAlone />
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>How does browser build the webpage?</h2>
        <RenderTree />
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>How does browser build the webpage?</h2>
        <div>Reflow - process of painting the Render Tree.</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>How does browser build the webpage?</h2>
        <div>Reflow - process of painting the Render Tree.</div>
        <div>Expensive one :(</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>How does browser build the webpage?</h2>
        <div>Reflow - process of painting the Render Tree.</div>
        <div>Expensive one :(</div>
        <div>Insert or remove DOM elements, calculate size, modify content, animation...</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>How does browser build the webpage?</h2>
        <div>Reflow - process of painting the Render Tree.</div>
        <div>Expensive one :(</div>
        <div>Insert or remove DOM elements, calculate size, modify content, animation...</div>
        <div>The good practice is to reduce the amount of reflows.</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>How does browser build the webpage?</h2>
        <div>Reflow - process of painting the Render Tree.</div>
        <div>Expensive one :(</div>
        <div>Insert or remove DOM elements, calculate size, modify content, animation...</div>
        <div>The good practice is to reduce the amount of reflows.</div>
        <div>React helps us with it!</div>
      </Slide>

      { /* Using React's virtual DOM */ }

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        <Code code={`ReactDOM.render(<List />,
  document.getElementById('container'))`} />
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        <Code code={`ReactDOM.render(<List />,
  document.getElementById('container'))`} />
        <table style={{fontSize: '20px'}}>
          <tbody>
            <tr>
              <td>
                <Code code={`{
  type: List,
  props: {...},
  children: {...}
}`} syntax="json" />
              </td>
              <td>
                <Code code={`<div>
  <button></button>
  { this.state.items.map(item => <Item />) }
</div>
                `} syntax="html"/>
              </td>
            </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        <table>
          <tbody>
          <tr>
            <th>Elements</th>
            <th>Instances</th>
            <th>DOM</th>
          </tr>
          <tr>
            <td>
              <div>List</div>
            </td>
            <td>

            </td>
            <td>#container</td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        <table>
          <tbody>
          <tr>
            <th>Elements</th>
            <th>Instances</th>
            <th>DOM</th>
          </tr>
          <tr>
            <td>
              <div>List</div>
            </td>
            <td>
              <div>List</div>
            </td>
            <td>#container</td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        <table>
          <tbody>
          <tr>
            <th>Elements</th>
            <th>Instances</th>
            <th>DOM</th>
          </tr>
          <tr>
            <td>
              <div>List</div>
              <div>div</div>
              <div>button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
            </td>
            <td>
              <div>List</div>
            </td>
            <td>#container</td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        <table>
          <tbody>
          <tr>
            <th>Elements</th>
            <th>Instances</th>
            <th>DOM</th>
          </tr>
          <tr>
            <td>
              <div>List</div>
              <div>div</div>
              <div>button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
            </td>
            <td>
              <div>List</div>
              <div style={{ outline: '1px solid black',
                            height: '240px',
                            paddingLeft: '10px',
                            marginLeft: '20px',
                            marginRight: '15px'
                    }}>
                div
              </div>
            </td>
            <td>#container</td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        <table>
          <tbody>
          <tr>
            <th>Elements</th>
            <th>Instances</th>
            <th>DOM</th>
          </tr>
          <tr>
            <td>
              <div>List</div>
              <div>div</div>
              <div>button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
            </td>
            <td>
              <div>List</div>
              <div style={{ outline: '1px solid black',
                            height: '240px',
                            paddingLeft: '10px',
                            marginLeft: '20px',
                            marginRight: '15px'
                    }}>
                div
              </div>
            </td>
            <td>
              <div>#container</div>
              <div>div</div>
            </td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        <table>
          <tbody>
          <tr>
            <th>Elements</th>
            <th>Instances</th>
            <th>DOM</th>
          </tr>
          <tr>
            <td>
              <div>List</div>
              <div>div</div>
              <div>button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
            </td>
            <td>
              <div>List</div>
              <div style={{ outline: '1px solid black',
                            height: '250px',
                            paddingLeft: '10px',
                            marginLeft: '20px',
                            marginRight: '15px'
                    }}>
                div
                <div style={{ marginLeft: '20px'}}>
                  <div>button</div>
                  <div>Item</div>
                  <div>Item</div>
                  <div>Item</div>
                </div>
              </div>
            </td>
            <td>
              <div>#container</div>
              <div>div</div>
            </td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        <table>
          <tbody>
          <tr>
            <th>Elements</th>
            <th>Instances</th>
            <th>DOM</th>
          </tr>
          <tr>
            <td>
              <div>List</div>
              <div>div</div>
              <div>button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
            </td>
            <td>
              <div>List</div>
              <div style={{ outline: '1px solid black',
                            height: '250px',
                            paddingLeft: '10px',
                            marginLeft: '20px',
                            marginRight: '15px'
                    }}>
                div
                <div style={{ marginLeft: '20px'}}>
                  <div>button</div>
                  <div>Item <span style={{color: '#B93734'}}>?</span></div>
                  <div>Item <span style={{color: '#B93734'}}>?</span></div>
                  <div>Item <span style={{color: '#B93734'}}>?</span></div>
                </div>
              </div>
            </td>
            <td>
              <div>#container</div>
              <div>div</div>
              <div style={{marginLeft: '20px'}}>button</div>
            </td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        <table>
          <tbody>
          <tr>
            <th>Elements</th>
            <th>Instances</th>
            <th>DOM</th>
          </tr>
          <tr>
            <td>
              <div>List</div>
              <div>div</div>
              <div>button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
              <div>div x 3</div>
            </td>
            <td>
              <div>List</div>
              <div style={{ outline: '1px solid black',
                            height: '250px',
                            paddingLeft: '10px',
                            marginLeft: '20px',
                            marginRight: '15px'
                    }}>
                div
                <div style={{ marginLeft: '20px'}}>
                  <div>button</div>
                  <div>Item</div>
                  <div>Item</div>
                  <div>Item</div>
                </div>
              </div>
            </td>
            <td>
              <div>#container</div>
              <div>div</div>
              <div style={{marginLeft: '20px'}}>button</div>
            </td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        <table>
          <tbody>
          <tr>
            <th>Elements</th>
            <th>Instances</th>
            <th>DOM</th>
          </tr>
          <tr>
            <td>
              <div>List</div>
              <div>div</div>
              <div>button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
              <div>div x 3</div>
            </td>
            <td>
              <div>List</div>
              <div style={{ outline: '1px solid black',
                            height: '250px',
                            paddingLeft: '10px',
                            marginLeft: '20px',
                            marginRight: '15px'
                    }}>
                div
                <div style={{ marginLeft: '20px'}}>
                  <div>button</div>
                  {[1,2,3].map(number =>
                    <div key={number} >
                      Item
                      <span> ---> div</span>
                    </div>)
                  }
                </div>
              </div>
            </td>
            <td>
              <div>#container</div>
              <div>div</div>
              <div style={{marginLeft: '20px'}}>button</div>
            </td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        <table>
          <tbody>
          <tr>
            <th>Elements</th>
            <th>Instances</th>
            <th>DOM</th>
          </tr>
          <tr>
            <td>
              <div>List</div>
              <div>div</div>
              <div>button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
              <div>div x 3</div>
            </td>
            <td>
              <div>List</div>
              <div style={{ outline: '1px solid black',
                            height: '250px',
                            paddingLeft: '10px',
                            marginLeft: '20px',
                            marginRight: '15px'
                    }}>
                div
                <div style={{ marginLeft: '20px'}}>
                  <div>button</div>
                  {[1,2,3].map(number =>
                    <div key={number} >
                      Item
                      <span> ---> div</span>
                    </div>)
                  }
                </div>
              </div>
            </td>
            <td>
              <div>#container</div>
              <div>div</div>
              <div style={{marginLeft: '20px'}}>button</div>
              <div style={{marginLeft: '20px'}}>div</div>
              <div style={{marginLeft: '20px'}}>div</div>
              <div style={{marginLeft: '20px'}}>div</div>
            </td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        <table>
          <tbody>
          <tr>
            <th>Elements</th>
            <th>Instances</th>
            <th>DOM</th>
          </tr>
          <tr>
            <td>
              <div>List</div>
              <div>div</div>
              <div>button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
              <div>div x 3</div>
            </td>
            <td>
              <div>List</div>
              <div style={{ outline: '1px solid black',
                            height: '250px',
                            paddingLeft: '10px',
                            marginLeft: '20px',
                            marginRight: '15px'
                    }}>
                div
                <div style={{ marginLeft: '20px'}}>
                  <div>button</div>
                  <div>
                    {[1,2,3].map(number =>
                      <div key={number} >
                        Item
                        <span> ---> div</span>
                      </div>)
                    }
                  </div>

                </div>
              </div>
            </td>
            <td>
              <div className='combined-DOM'>
                <div>#container</div>
                <div>div</div>
                <div style={{marginLeft: '20px'}}>button</div>
                <div style={{marginLeft: '20px'}}>div</div>
                <div style={{marginLeft: '20px'}}>div</div>
                <div style={{marginLeft: '20px'}}>div</div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        Virtual DOM is a <i>technique and set of algorithms</i> that allow us to improve front end performance
        by avoiding direct work with DOM.
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Using React's virtual DOM.</h2>
        Virtual DOM is a <i>technique and set of algorithms</i> that allow us to improve front end performance
        by avoiding direct work with DOM.
        <div>
          React figures out the small number of changes that need to be made to the DOM and batches them together,
          so the browser can make a smaller amount of reflows.
        </div>
      </Slide>

      { /* Tips to make React faster */ }

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>1. Usage of "key" property.</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>1. Usage of "key" property.</div>
        <pre className="key-prop-warning">
          WARNING: Each child in an array or iterator should have a unique "key" prop.
        </pre>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>1. Usage of "key" property.</div>
        <table>
          <tbody>
          <tr>
            <td>
              <Code code={`
[
  button,
  [item, item, item]
]

`} syntax="javascript"
              />
            </td>
            <td style={{visibility: 'hidden'}}>
              <Code code={`{
    .0: button,
  .1.0: item,
  .1.1: item,
  .1.2: item,
}`} syntax="json"
              />
            </td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>1. Usage of "key" property.</div>
        <table>
          <tbody>
          <tr>
            <td>
              <Code code={`
[
  button,
  [item, item, item]
]

`} syntax="javascript"
              />
            </td>
            <td>
              <Code code={`{
    .0: button,
  .1.0: item,
  .1.1: item,
  .1.2: item,
}`} syntax="json"
              />
            </td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>1. Usage of "key" property.</div>
        <div className="fruit-example">
          <div className="reverse-button">Reverse</div>
          <ol>
            <li>Orange</li>
            <li>Grapes</li>
            <li>Melon</li>
          </ol>
        </div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>1. Usage of "key" property.</div>
        <table>
          <tbody>
          <tr>
            <td className='fruit-example-code'>
              <Code code={`Previous:
{
    .0: button,
  .1.0: item (Orange),
  .1.1: item (Grapes),
  .1.2: item (Melon),
}`} syntax="json"
              />
            </td>
            <td className='fruit-example-code'>
              <Code code={`Next:
{
    .0: button,
  .1.0: item (Melon),
  .1.1: item (Grapes),
  .1.2: item (Orange),
}`} syntax="json"
              />
            </td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>1. Usage of "key" property.</div>
        <table>
          <tbody>
          <tr>
            <td className='fruit-example-code'>
              <Code code={`Previous:
{
  .0:         button,
  .1:$orange: item (Orange),
  .1:$grapes: item (Grapes),
  .1:$melon:  item (Melon),
}`} syntax="json"
              />
            </td>
            <td className='fruit-example-code'>
              <Code code={`Next:
{
  .0:         button,
  .1:$melon:  item (Melon),
  .1:$grapes: item (Grapes),
  .1:$orange: item (Orange),
}`} syntax="json"
              />
            </td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>1. Usage of "key" property.</div>
        <div>
          It is useful when dealing with complex DOM structures,
          as it helps to <b>match previous and current instances</b> of elements.
        </div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <Code code={`shouldComponentUpdate: (nextProps, nextState) => {
  if (this.state.items === nextState.items) {
    return false;
  }
  return true;
}`}/>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <Code code={`(newItem) => {
  let nextItems = this.state.items;
  nextItems.push(newItem);
  this.setState({
    items: nextItems;
  })
};`}/>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <div>Result will always be <b>false</b>.</div>
        <div>You will never see new items...</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <div>Result will always be <b>false</b>.</div>
        <div>You will never see new items...</div>
        <Code code={`if (this.state.items === nextState.items) {
  return false;
}`}/>
        <div>Because you are comparing the same array to itself.</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <Code code={`(newItem) => {
  let nextItems = [...this.state.items, newItem];
  this.setState({
    items: nextItems;
  })
};`}/>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <div>Result will always be <b>true</b>.</div>
        <div>Method will be executed anyway...</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <div>Result will always be <b>true</b>.</div>
        <div>Method will be executed anyway...</div>
        <div>What about deep checking?</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <div>Result will always be <b>true</b>.</div>
        <div>Method will be executed anyway...</div>
        <div>What about deep checking?</div>
        <div>Probably... But execution time may be longer, than render() itself and there won't be any boost in performance...</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <PleaseGuy />
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <PleaseGuy />
        <div style={{marginTop: '175px'}}>Use <b>immutable</b> data!</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <PleaseGuy />
        <div style={{marginTop: '175px'}}>Use <b>immutable</b> data!</div>
        <div>It'll help you to perform quick equality checks and boost performance.</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>3. Use setState() lower in a tree.</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>3. Use setState() lower in a tree.</div>
          <div style={{width: '50%', margin: '0 auto'}}>
            <div>List</div>
            <div style={{ outline: '1px solid black',
                      height: '250px',
                      paddingLeft: '10px',
                      marginLeft: '20px',
                      marginRight: '15px'
              }}>
              div
              <div style={{ marginLeft: '20px'}}>
                <div>button</div>
                {[1,2,3].map(number =>
                  <div key={number} >
                    Item
                    <span> ---> div</span>
                  </div>)
                }
              </div>
            </div>
          </div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>3. Use setState() lower in a tree.</div>
        <div style={{width: '50%', margin: '0 auto'}}>
          <div>List</div>
          <div style={{ outline: '1px solid black',
                      height: '250px',
                      paddingLeft: '10px',
                      marginLeft: '20px',
                      marginRight: '15px'
              }}>
            div
            <div style={{ marginLeft: '20px'}}>
              <div>button</div>
              <div>
                Item
                <span> ---> div</span>
              </div>
              <div style={{color: '#B93734'}}>
                Item
                <span> ---> div</span>
              </div>
              <div>
                Item
                <span> ---> div</span>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>3. Use setState() lower in a tree.</div>
        <div style={{width: '50%', margin: '0 auto'}}>
          <div style={{color: '#4b86c2'}}>List</div>
          <div style={{ outline: '1px solid black',
                      height: '250px',
                      paddingLeft: '10px',
                      marginLeft: '20px',
                      marginRight: '15px'
              }}>
            div
            <div style={{ marginLeft: '20px'}}>
              <div>button</div>
              {[1,2,3].map(number =>
                <div key={number} >
                  Item
                  <span> ---> div</span>
                </div>)
              }
            </div>
          </div>
          <div style={{position: 'absolute', top: '240px', left: '400px'}}>
            <i>this.setState();</i>
          </div>
        </div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>3. Use setState() lower in a tree.</div>
        <div style={{width: '50%', margin: '0 auto'}}>
          <div>List</div>
          <div style={{ outline: '1px solid black',
                      height: '250px',
                      paddingLeft: '10px',
                      marginLeft: '20px',
                      marginRight: '15px',
                      color: '#4b86c2'
              }}>
            div
            <div style={{ marginLeft: '20px'}}>
              <div>button</div>
              {[1,2,3].map(number =>
                <div key={number} >
                  Item
                  <span> ---> div</span>
                </div>)
              }
            </div>
          </div>
        </div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>3. Use setState() lower in a tree.</div>
        <div style={{width: '50%', margin: '0 auto'}}>
          <div>List</div>
          <div style={{ outline: '1px solid black',
                      height: '250px',
                      paddingLeft: '10px',
                      marginLeft: '20px',
                      marginRight: '15px'
              }}>
            div
            <div style={{ marginLeft: '20px'}}>
              <div>button</div>
              <div>
                Item
                <span> ---> div</span>
              </div>
              <div style={{color: '#B93734'}}>
                Item
                <span> ---> div</span>
              </div>
              <div>
                Item
                <span> ---> div</span>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>3. Use setState() lower in a tree.</div>
        <div style={{width: '50%', margin: '0 auto'}}>
          <div>List</div>
          <div style={{ outline: '1px solid black',
                      height: '250px',
                      paddingLeft: '10px',
                      marginLeft: '20px',
                      marginRight: '15px'
              }}>
            div
            <div style={{ marginLeft: '20px'}}>
              <div>button</div>
              <div>
                Item
                <span> ---> div</span>
              </div>
              <div style={{color: '#4b86c2'}}>
                Item
                <span> ---> div</span>
              </div>
              <div>
                Item
                <span> ---> div</span>
              </div>
            </div>
          </div>
          <div style={{position: 'absolute', top: '440px', left: '550px'}}>
            <i>this.setState();</i>
          </div>
        </div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>3. Use setState() lower in a tree.</div>
        <div style={{width: '50%', margin: '0 auto 10px auto'}}>
          <div>List</div>
          <div style={{ outline: '1px solid black',
                      height: '250px',
                      paddingLeft: '10px',
                      marginLeft: '20px',
                      marginRight: '15px'
              }}>
            div
            <div style={{ marginLeft: '20px'}}>
              <div>button</div>
              <div>
                Item
                <span> ---> div</span>
              </div>
              <div style={{color: '#4b86c2'}}>
                Item
                <span> ---> div</span>
              </div>
              <div>
                Item
                <span> ---> div</span>
              </div>
            </div>
          </div>
          <div style={{position: 'absolute', top: '440px', left: '550px'}}>
            <i>this.setState();</i>
          </div>
        </div>
        <div>The same is valid for Redux's <b>connect()</b> function.</div>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>To sum up:</div>
        <ol>
          <li>key;</li>
          <li>shouldComponentUpdate() and immutability;</li>
          <li>setState() or connect().</li>
        </ol>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>To sum up:</div>
        <ol>
          <li>key - help React to match previous and new instances.</li>
          <li>shouldComponentUpdate() and immutability</li>
          <li>setState() or connect().</li>
        </ol>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>To sum up:</div>
        <ol>
          <li>key - help React to match previous and new instances.</li>
          <li>shouldComponentUpdate() and immutability - prevent component from calling unnecessary renders.</li>
          <li>setState() or connect().</li>
        </ol>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2>Making React to work faster.</h2>
        <div>To sum up:</div>
        <ol>
          <li>key - help React to match previous and new instances.</li>
          <li>shouldComponentUpdate() and immutability - prevent component from calling unnecessary renders.</li>
          <li>setState() or connect() - when used lower in the tree, only changed element will be rerendered.</li>
        </ol>
      </Slide>

      <Slide className="with-logo dark-blue">
        <h2>Based on.</h2>
        <DaLogo color='white'/>
        <div>
          <a href="https://www.youtube.com/watch?v=-t8eOoRsJ7M" target="_linsTalk">
            Lin's talk on React Europe 2016
          </a>
        </div>
        <div>
          <a href="https://code-cartoons.com/" target="_codeCartoons">
            Code Cartoons (just awesome!)
          </a>
        </div>
        <LinClark />
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2 className="shout shrink">It's all just JavaScript!</h2>
      </Slide>

      <Slide className="with-logo">
        <DaLogo/>
        <h2 style={{ fontSize: '120px', position: 'absolute', top: '40%', left: 0, width: '100%', textAlign: 'center' }}>
          Dziękuję!
        </h2>
      </Slide>
    </Deck>
  </DocumentTitle>