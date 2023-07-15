export interface Play {
    [key: string]: Info 
}

export interface Info {
    name: string;
    type: string
}

export const plays: Play = {
    "hemlet": {"name": "Hamlet", "type": "tragedy"},
    "as-like": {"name": "As You Like It", "type": "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"}
}