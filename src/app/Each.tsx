import React, { Children } from 'react'


type EachProps<T> = {
    render: (item: T, index?: number) => JSX.Element
    of: T[]

}

export const Each = <T,>({ render, of }: EachProps<T>) => Children.toArray(of.map((item, index) => render(item, index)))
