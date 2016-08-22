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

// Prism JS configuration
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import "style!css!prismjs/themes/prism.css"; // Theme

import "css/theme.css";

const TOPIC = 'A guide to performance in React';
const SPEAKER = (<span>Brought to you by <a href="http://github.com/gel1os">Kirill Trukhanovich</a></span>);

export default () =>
  <DocumentTitle title={TOPIC}>
    <Deck>
      <header className="caption">
        <h1>{TOPIC}</h1>
        <p>{SPEAKER}</p>
      </header>
      <Slide className="cover-me">
        <h2>{TOPIC}</h2>
        <p>{SPEAKER}</p>
        <img src="https://shwr.me/pictures/cover.jpg" alt="" className="cover" />
      </Slide>
      <Slide>
        <h2>Agenda</h2>
        <ol>
          <li>What is React and why would you consider using it?</li>
          <li>The basics of rendering in the browser.</li>
          <li>Minimizing and batching DOM changes with the virtual DOM.</li>
          <li>What you can do to make it faster.</li>
        </ol>
      </Slide>

      { /* What's React?  */ }

      <Slide>
        <h2>What is React?</h2>
      </Slide>

      <Slide>
        <h2>What is React?</h2>
        <ReactLogo />
        <div>It's a JavaScript Library for creating UI.</div>
      </Slide>

      <Slide>
        <h2>What is React?</h2>
        <ReactLogo />
        <div>It's a JavaScript Library for creating UI.</div>
        <div>Developed by Facebook.</div>
      </Slide>

      <Slide>
        <h2>What is React?</h2>
        <ReactLogo />
        <div>It's a JavaScript Library for creating UI.</div>
        <div>Developed by Facebook.</div>
        <div>
          <strong>V</strong> in <strong>MVC</strong>.
        </div>
      </Slide>

      <Slide>
        <h2>What is React?</h2>
        <ReactLogo />
        <div>It's a JavaScript Library for creating UI.</div>
        <div>Developed by Facebook.</div>
        <div>
          <strong>V</strong> in <strong>MVC</strong>.
        </div>
        <div style={{whiteSpace: 'nowrap'}}>You cannot build a fully functional dynamic application with React alone.</div>
      </Slide>

      <Slide>
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

      <Slide>
        <h2>Why would I want to use it?</h2>
      </Slide>

      <Slide>
        <h2>Why would I want to use it?</h2>
        <div>Components... Components everywhere!</div>
      </Slide>

      <Slide>
        <h2>Why would I want to use it?</h2>
        <div>Components... Components everywhere!</div>
        <div style={{whiteSpace: 'nowrap'}}>
          Your application is like a constructor, built with LEGO blocks!
        </div>
      </Slide>

      <Slide>
        <h2>Why would I want to use it?</h2>
        <div>Components... Components everywhere!</div>
        <div style={{whiteSpace: 'nowrap'}}>
          Your application is like a constructor, built with LEGO blocks!
        </div>
        <div>Splitting your app on encapsulated components gives you:</div>
      </Slide>

      <Slide>
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

      <Slide>
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

      <Slide>
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

      <Slide>
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

      <Slide>
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

      <Slide>
        <h2>What is a React Component?</h2>
      </Slide>

      <Slide>
        <h2>What is a React Component?</h2>
        <div>That's an instance, that represents a part of User Interface.</div>
      </Slide>

      <Slide>
        <h2>What is a React Component?</h2>
        <div>That's an instance, that represents a part of User Interface.</div>
        <div>3 key features of component are:</div>
        <ol>
          <li>State;</li>
          <li>Properties;</li>
          <li>Lifecycle methods.</li>
        </ol>
      </Slide>

      <Slide>
        <h2>What is a React Component?</h2>
        <div>That's an instance, that represents a part of User Interface.</div>
        <div>3 key features of component are:</div>
        <ol>
          <li>State - <i>object</i> which tells component how to behave and be rendered under different conditions. It's an internal part of component.</li>
          <li>Properties;</li>
          <li>Lifecycle methods.</li>
        </ol>
      </Slide>

      <Slide>
        <h2>What is a React Component?</h2>
        <div>That's an instance, that represents a part of User Interface.</div>
        <div>3 key features of component are:</div>
        <ol>
          <li>State - <i>object</i> which tells component how to behave and be rendered under different conditions. It's an internal part of component.</li>
          <li>Properties - <i>data</i>, which is passed to component from outside.</li>
          <li>Lifecycle methods.</li>
        </ol>
      </Slide>

      <Slide>
        <h2>What is a React Component?</h2>
        <div>That's an instance, that represents a part of User Interface.</div>
        <div>3 key features of component are:</div>
        <ol>
          <li>State - <i>object</i> which tells component how to behave and be rendered under different conditions. It's an internal part of component.</li>
          <li>Properties - <i>data</i>, which is passed to component from outside.</li>
          <li>Lifecycle methods - internal <i>functions</i> which execute during the life of component. E.g. render(), componentWillMount(), componentDidMount(), etc...</li>
        </ol>
      </Slide>

      <Slide>
        <h2>Example! Finally...</h2>
        <span>Counter</span>{' '}
        <a href="http://jsbin.com/borufu/12/edit?html,output" target="_jsbin">JS Bin</a>
      </Slide>

      { /* How does browser build the webpage?  */ }

      <Slide>
        <h2>How does browser build the webpage?</h2>
      </Slide>

      <Slide>
        <h2>How does browser build the webpage?</h2>
        <div>Main thread - in charge of JavaScript, DOM and layout.</div>
      </Slide>

      <Slide>
        <h2>How does browser build the webpage?</h2>
        <div>Main thread - in charge of JavaScript, DOM and layout.</div>
        <FuckYeah />
      </Slide>

      <Slide>
        <h2>How does browser build the webpage?</h2>
        <div>Main thread - in charge of JavaScript, DOM and layout.</div>
        <FuckYeah />
        <ForeverAlone />
      </Slide>

      <Slide>
        <h2>How does browser build the webpage?</h2>
        <RenderTree />
      </Slide>

      <Slide>
        <h2>How does browser build the webpage?</h2>
        <div>Reflow - process of painting the Render Tree.</div>
      </Slide>

      <Slide>
        <h2>How does browser build the webpage?</h2>
        <div>Reflow - process of painting the Render Tree.</div>
        <div>Expensive one :(</div>
      </Slide>

      <Slide>
        <h2>How does browser build the webpage?</h2>
        <div>Reflow - process of painting the Render Tree.</div>
        <div>Expensive one :(</div>
        <div>Insert or remove DOM elements, calculate size, modify content, animation...</div>
      </Slide>

      <Slide>
        <h2>How does browser build the webpage?</h2>
        <div>Reflow - process of painting the Render Tree.</div>
        <div>Expensive one :(</div>
        <div>Insert or remove DOM elements, calculate size, modify content, animation...</div>
        <div>The good practice is to reduce the amount of reflows.</div>
      </Slide>

      <Slide>
        <h2>How does browser build the webpage?</h2>
        <div>Reflow - process of painting the Render Tree.</div>
        <div>Expensive one :(</div>
        <div>Insert or remove DOM elements, calculate size, modify content, animation...</div>
        <div>The good practice is to reduce the amount of reflows.</div>
        <div>React helps us with it!</div>
      </Slide>

      { /* Using React's virtual DOM */ }

      <Slide>
        <h2>Using React's virtual DOM.</h2>
      </Slide>

      <Slide>
        <h2>Using React's virtual DOM.</h2>
        <Code code={`ReactDOM.render(<List />,
  document.getElementById('container'))`} />
      </Slide>

      <Slide>
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

      <Slide>
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

      <Slide>
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

      <Slide>
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
              <div>Button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
              <div>Div</div>
            </td>
            <td>
              <div>List</div>
            </td>
            <td>#container</td>
          </tr>
          </tbody>
        </table>
      </Slide>

      <Slide>
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
              <div>Button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
              <div>Div</div>
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

      <Slide>
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
              <div>Button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
              <div>Div</div>
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

      <Slide>
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
              <div>Button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
              <div>Div</div>
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

      <Slide>
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
              <div>Button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
              <div>Div</div>
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
                  <div>Item <span style={{color: '#c00'}}>?</span></div>
                  <div>Item <span style={{color: '#c00'}}>?</span></div>
                  <div>Item <span style={{color: '#c00'}}>?</span></div>
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

      <Slide>
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
              <div>Button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
              <div>Div</div>
              <div>Div x 3</div>
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

      <Slide>
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
              <div>Button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
              <div>Div</div>
              <div>Div x 3</div>
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

      <Slide>
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
              <div>Button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
              <div>Div</div>
              <div>Div x 3</div>
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

      <Slide>
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
              <div>Button</div>
              <div>Item</div>
              <div>Item</div>
              <div>Item</div>
              <div>Div</div>
              <div>Div x 3</div>
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

      <Slide>
        <h2>Using React's virtual DOM.</h2>
        Virtual DOM is a <i>technique and set of algorithms</i> that allow us to improve front end performance
        by avoiding direct work with DOM.
      </Slide>

      <Slide>
        <h2>Using React's virtual DOM.</h2>
        Virtual DOM is a <i>technique and set of algorithms</i> that allow us to improve front end performance
        by avoiding direct work with DOM.
        <div>
          React figures out the small number of changes that need to be made to the DOM and batches them together,
          so the browser can make a smaller amount of reflows.
        </div>
      </Slide>

      { /* Tips to make React faster */ }

      <Slide>
        <h2>Making React to work faster.</h2>
      </Slide>

      <Slide>
        <h2>Making React to work faster.</h2>
        <div>1. Usage of "key" property.</div>
      </Slide>

      <Slide>
        <h2>Making React to work faster.</h2>
        <div>1. Usage of "key" property.</div>
        <pre className="key-prop-warning">
          WARNING: Each child in an array or iterator should have a unique "key" prop.
        </pre>
      </Slide>

      <Slide>
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

      <Slide>
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

      <Slide>
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

      <Slide>
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

      <Slide>
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

      <Slide>
        <h2>Making React to work faster.</h2>
        <div>1. Usage of "key" property.</div>
        <div>
          It is useful when dealing with complex DOM structures,
          as it helps to <b>match previous and current instances</b> of elements.
        </div>
      </Slide>

      <Slide>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
      </Slide>

      <Slide>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <Code code={`shouldComponentUpdate: (nextProps, nextState) => {
  if (this.state.items === nextState.items) {
    return false;
  }
  return true;
}`}/>
      </Slide>

      <Slide>
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

      <Slide>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <div>Result will always be <b>false</b>.</div>
        <div>You will never see new items...</div>
      </Slide>

      <Slide>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <div>Result will always be <b>false</b>.</div>
        <div>You will never see new items...</div>
        <Code code={`if (this.state.items === nextState.items) {
  return false;
}`}/>
        <div>Because you are comparing the same array to itself.</div>
      </Slide>

      <Slide>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <Code code={`(newItem) => {
  let nextItems = [...this.state.items, newItem];
  this.setState({
    items: nextItems;
  })
};`}/>
      </Slide>

      <Slide>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <div>Result will always be <b>true</b>.</div>
        <div>Method will be executed anyway...</div>
      </Slide>

      <Slide>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <div>Result will always be <b>true</b>.</div>
        <div>Method will be executed anyway...</div>
        <div>What about deep checking?</div>
      </Slide>

      <Slide>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <div>Result will always be <b>true</b>.</div>
        <div>Method will be executed anyway...</div>
        <div>What about deep checking?</div>
        <div>Probably... But execution time may be longer, than render() itself and there won't be any boost in performance...</div>
      </Slide>

      <Slide>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <PleaseGuy />
      </Slide>

      <Slide>
        <h2>Making React to work faster.</h2>
        <div>2. Usage of shouldComponentUpdate().</div>
        <PleaseGuy />
        <div style={{marginTop: '175px'}}>Use <b>immutable</b> data!</div>
      </Slide>

      <Slide>
        <h2>Two columns if you like</h2>
        <p className="double">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
      </Slide>
      <Slide>
        <h2>All kind of lists</h2>
        <ol>
          <li>Simple lists are marked with bullets</li>
          <li>Ordered lists begin with a number</li>
          <li>You can even nest lists one inside another
            <ul>
              <li>Or mix their types</li>
              <li>But do not go too far</li>
              <li>Otherwise audience will be bored</li>
            </ul>
          </li>
          <li>Look, seven rows exactly!</li>
        </ol>
      </Slide>
      <Slide>
        <h2>Serious citations</h2>
        <figure>
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
          </blockquote>
          <figcaption>Marcus Tullius Cicero</figcaption>
        </figure>
      </Slide>
      <Slide>
        <h2>Support for different languages</h2>
        <Code code={`{ "foo": "bar" }`} lang="json" />
        <Code code={`<JSX isCool={ true } />`} lang="jsx" />
      </Slide>
      <Slide className="slide">
        <h2>Code samples</h2>
        <pre>
          <code>&lt;!DOCTYPE html&gt;</code>
          <code className="mark">&lt;html lang="en"&gt;</code>
          <code><mark>&lt;head&gt;</mark> <span className="comment">&lt;!--Comment--&gt;</span></code>
          <code>    &lt;title&gt;Shower&lt;/title&gt;</code>
          <code>    &lt;meta charset="<mark className="important">UTF-8</mark>"&gt;</code>
          <code>    &lt;link rel="stylesheet" href="screen.css"&gt;</code>
          <code><mark>&lt;/head&gt;</mark></code>
        </pre>
      </Slide>
      <Slide>
        <h2>Even tables</h2>
        <table>
          <tbody>
            <tr>
              <th scope="col">Locavore</th>
              <th>Umami</th>
              <th>Helvetica</th>
              <th>Vegan</th>
            </tr>
            <tr>
              <th scope="row">Fingerstache</th>
              <td>Kale</td>
              <td>Chips</td>
              <td>Keytar</td>
            </tr>
            <tr>
              <th scope="row">Sriracha</th>
              <td>Gluten-free</td>
              <td>Ennui</td>
              <td>Keffiyeh</td>
            </tr>
            <tr>
              <th scope="row">Thundercats</th>
              <td>Jean</td>
              <td>Shorts</td>
              <td>Biodiesel</td>
            </tr>
            <tr>
              <th scope="row">Terry</th>
              <td>Richardson</td>
              <td>Swag</td>
              <td>Blog</td>
            </tr>
          </tbody>
        </table>
        <p>It’s good to have information organized.</p>
      </Slide>
      <Slide className="picture">
        <h2>Pictures</h2>
        <img src="https://shwr.me/pictures/picture.jpg" alt="" className="cover" />
      </Slide>
      <Slide>
        <h2 className="shout shrink">It's all just JavaScript!</h2>
      </Slide>
      <Slide className="grid">
        <h2>All nicely aligned to grid</h2>
      </Slide>
      <Slide className="see-more">
        <h2 className="shout">
          <img src="https://shwr.me/pictures/logo.svg" alt="Shower logo" />&nbsp;
          <a href="https://github.com/shower/shower">See more on GitHub</a>
        </h2>
      </Slide>
      </Deck>
  </DocumentTitle>