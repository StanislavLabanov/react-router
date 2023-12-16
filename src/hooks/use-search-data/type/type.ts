export type queryTypes = 'character' | 'location' | 'episode'

interface Info {
   count: number
   pages: number
   next: string
   prev: any
}

export interface Result {
   id: number
   name: string
   air_date: string
   episode: string
   characters: string[]
   url: string
   created: string
}

export interface DataType {
   info: Info
   results: Result[]
}