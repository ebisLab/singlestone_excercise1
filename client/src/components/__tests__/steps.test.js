import {render, screen, cleanup} from '@testing-library/react'
import Steps from '../Steps';

afterEach(()=>{
    cleanup()
})

test('should render Steps component', ()=>{
    // const steps={
    //     id: 'd9a439d0-8dbf-4bab-8e08-626f8194a075',
    //     stepNumber: '1',
    //     versionContent: [
    //       {
    //         title: 'Fill Out a Profile',
    //         body: 'We only want you to get games and gear that youâ€™ll love, so weâ€™ll ask for your preferences up front.',
    //         effectiveDate: '2019-05-20T03:04:05.000Z'
    //       }
    //     ]
    //   }
    render(<Steps />)
    const stepsElement = screen.getByTestId('steps-1');
    expect(stepsElement).toBeInTheDocument();
    expect(stepsElement).toHaveTextContent('How It works')
})