import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useCounter } from "../../src/hooks/useCounter"
import { useFetch } from "../../src/hooks/useFetch"

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Prubas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn()

    useCounter.mockReturnValue({ 
        counter: 1,
        increment: mockIncrement
    })

    beforeEach( ()=> {
        jest.clearAllMocks()
    })

    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({ data:null, isLoading:true, hasError:null } )


        render( <MultipleCustomHooks /> )
        
        expect( screen.getAllByText('Loading...') )
        expect( screen.getAllByText('RickAndMorty - Quotes') )

    })
    

    test('Debe de mostar un quote', () => {

        const character = {
            id:1,
            name:'Rick Sanchez',
            status:'Alive',
            species:'Human',
            type:'',
            gender:'Male',
            origin:{
                name:'Earth (C-137)',
                url:'https://rickandmortyapi.com/api/location/1'
            },
            location:{
                name:'Citadel of Ricks',
                url:'https://rickandmortyapi.com/api/location/3'
            },
            image:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            episode:[
                'https://rickandmortyapi.com/api/episode/1',
                'https://rickandmortyapi.com/api/episode/2',
                'https://rickandmortyapi.com/api/episode/3',
                'https://rickandmortyapi.com/api/episode/4',
                'https://rickandmortyapi.com/api/episode/5',
                'https://rickandmortyapi.com/api/episode/6',
                'https://rickandmortyapi.com/api/episode/7',
                'https://rickandmortyapi.com/api/episode/8',
                'https://rickandmortyapi.com/api/episode/9',
                'https://rickandmortyapi.com/api/episode/10',
                'https://rickandmortyapi.com/api/episode/11',
                'https://rickandmortyapi.com/api/episode/12',
                'https://rickandmortyapi.com/api/episode/13',
                'https://rickandmortyapi.com/api/episode/14',
                'https://rickandmortyapi.com/api/episode/15',
                'https://rickandmortyapi.com/api/episode/16',
                'https://rickandmortyapi.com/api/episode/17',
                'https://rickandmortyapi.com/api/episode/18',
                'https://rickandmortyapi.com/api/episode/19',
                'https://rickandmortyapi.com/api/episode/20',
                'https://rickandmortyapi.com/api/episode/21',
                'https://rickandmortyapi.com/api/episode/22',
                'https://rickandmortyapi.com/api/episode/23',
                'https://rickandmortyapi.com/api/episode/24',
                'https://rickandmortyapi.com/api/episode/25',
                'https://rickandmortyapi.com/api/episode/26',
                'https://rickandmortyapi.com/api/episode/27',
                'https://rickandmortyapi.com/api/episode/28',
                'https://rickandmortyapi.com/api/episode/29',
                'https://rickandmortyapi.com/api/episode/30',
                'https://rickandmortyapi.com/api/episode/31',
                'https://rickandmortyapi.com/api/episode/32',
                'https://rickandmortyapi.com/api/episode/33',
                'https://rickandmortyapi.com/api/episode/34',
                'https://rickandmortyapi.com/api/episode/35',
                'https://rickandmortyapi.com/api/episode/36',
                'https://rickandmortyapi.com/api/episode/37',
                'https://rickandmortyapi.com/api/episode/38',
                'https://rickandmortyapi.com/api/episode/39',
                'https://rickandmortyapi.com/api/episode/40',
                'https://rickandmortyapi.com/api/episode/41',
                'https://rickandmortyapi.com/api/episode/42',
                'https://rickandmortyapi.com/api/episode/43',
                'https://rickandmortyapi.com/api/episode/44',
                'https://rickandmortyapi.com/api/episode/45',
                'https://rickandmortyapi.com/api/episode/46',
                'https://rickandmortyapi.com/api/episode/47',
                'https://rickandmortyapi.com/api/episode/48',
                'https://rickandmortyapi.com/api/episode/49',
                'https://rickandmortyapi.com/api/episode/50',
                'https://rickandmortyapi.com/api/episode/51'
            ],
            url:'https://rickandmortyapi.com/api/character/1',
            created:'2017-11-04T18:48:46.250Z'
        }

        useFetch.mockReturnValue({ 
            data:character, 
            isLoading:false, 
            hasError:null 
        })
        render( <MultipleCustomHooks /> )

        expect( screen.getByText('Rick Sanchez') ).toBeTruthy()

        const nextButton = screen.getByRole('button', { name: 'Next character' })
        expect(nextButton.disabled).toBeFalsy()

    })


    test('Debe de llamar la función de incrementar', () => {
        const character = {
            id:1,
            name:'Rick Sanchez',
            status:'Alive',
            species:'Human',
            type:'',
            gender:'Male',
            origin:{
                name:'Earth (C-137)',
                url:'https://rickandmortyapi.com/api/location/1'
            },
            location:{
                name:'Citadel of Ricks',
                url:'https://rickandmortyapi.com/api/location/3'
            },
            image:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            episode:[
                'https://rickandmortyapi.com/api/episode/1',
                'https://rickandmortyapi.com/api/episode/2',
                'https://rickandmortyapi.com/api/episode/3',
                'https://rickandmortyapi.com/api/episode/4',
                'https://rickandmortyapi.com/api/episode/5',
                'https://rickandmortyapi.com/api/episode/6',
                'https://rickandmortyapi.com/api/episode/7',
                'https://rickandmortyapi.com/api/episode/8',
                'https://rickandmortyapi.com/api/episode/9',
                'https://rickandmortyapi.com/api/episode/10',
                'https://rickandmortyapi.com/api/episode/11',
                'https://rickandmortyapi.com/api/episode/12',
                'https://rickandmortyapi.com/api/episode/13',
                'https://rickandmortyapi.com/api/episode/14',
                'https://rickandmortyapi.com/api/episode/15',
                'https://rickandmortyapi.com/api/episode/16',
                'https://rickandmortyapi.com/api/episode/17',
                'https://rickandmortyapi.com/api/episode/18',
                'https://rickandmortyapi.com/api/episode/19',
                'https://rickandmortyapi.com/api/episode/20',
                'https://rickandmortyapi.com/api/episode/21',
                'https://rickandmortyapi.com/api/episode/22',
                'https://rickandmortyapi.com/api/episode/23',
                'https://rickandmortyapi.com/api/episode/24',
                'https://rickandmortyapi.com/api/episode/25',
                'https://rickandmortyapi.com/api/episode/26',
                'https://rickandmortyapi.com/api/episode/27',
                'https://rickandmortyapi.com/api/episode/28',
                'https://rickandmortyapi.com/api/episode/29',
                'https://rickandmortyapi.com/api/episode/30',
                'https://rickandmortyapi.com/api/episode/31',
                'https://rickandmortyapi.com/api/episode/32',
                'https://rickandmortyapi.com/api/episode/33',
                'https://rickandmortyapi.com/api/episode/34',
                'https://rickandmortyapi.com/api/episode/35',
                'https://rickandmortyapi.com/api/episode/36',
                'https://rickandmortyapi.com/api/episode/37',
                'https://rickandmortyapi.com/api/episode/38',
                'https://rickandmortyapi.com/api/episode/39',
                'https://rickandmortyapi.com/api/episode/40',
                'https://rickandmortyapi.com/api/episode/41',
                'https://rickandmortyapi.com/api/episode/42',
                'https://rickandmortyapi.com/api/episode/43',
                'https://rickandmortyapi.com/api/episode/44',
                'https://rickandmortyapi.com/api/episode/45',
                'https://rickandmortyapi.com/api/episode/46',
                'https://rickandmortyapi.com/api/episode/47',
                'https://rickandmortyapi.com/api/episode/48',
                'https://rickandmortyapi.com/api/episode/49',
                'https://rickandmortyapi.com/api/episode/50',
                'https://rickandmortyapi.com/api/episode/51'
            ],
            url:'https://rickandmortyapi.com/api/character/1',
            created:'2017-11-04T18:48:46.250Z'
        }

        useFetch.mockReturnValue({ 
            data:character, 
            isLoading:false, 
            hasError:null 
        })


        render( <MultipleCustomHooks /> )

        const nextButton = screen.getByRole('button', { name: 'Next character' })
        
        fireEvent.click( nextButton )

        expect( mockIncrement ).toHaveBeenCalled()
        

    })

})


