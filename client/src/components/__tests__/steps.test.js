import {act, render, screen, cleanup, waitFor, fireEvent, findByTestId} from '@testing-library/react'
import Steps from '../Steps';
import {mock} from '../../mock';
import Hero from '../Hero';
import axios from 'axios';


// afterEach(()=>{
//     cleanup()
// })

describe("Steps", ()=>{

//before running each test, I'd like to create a mock for the fetch method
  beforeEach(()=>{
    
    global.fetch = jest.fn(()=>Promise.resolve({
      json: ()=>Promise.resolve(mock)
    }))
  })



test("fetch and render post numbers", async ()=>{
    render(<Steps/>)
    await waitFor(()=>
    mock.forEach(post=>expect(screen.getByText(`0${post.stepNumber}`)).toBeInTheDocument()))
  })


  test('fetch and render "Fill Out a Profile" heading', async ()=>{
    render(<Steps/>)
    await waitFor(()=>
    mock.forEach(post=>expect(screen.getByText(`Fill Out a Profile`)).toBeInTheDocument()))
  })


  test('should render Steps component', async()=>{
   render(<Steps />)
    // await act(async ()=>render(<Steps />));

    const stepsElement = screen.getByTestId('steps-1');

    await waitFor(()=>
    expect(stepsElement).toBeInTheDocument()
    )

    await waitFor(()=>
    expect(stepsElement).toHaveTextContent('How It works')
    )
})


test('click on button', async()=>{
  render(<Hero />);
  await waitFor(()=>
  mock.forEach(()=>fireEvent.click(screen.getByText("Get started")))
  )
})
})

