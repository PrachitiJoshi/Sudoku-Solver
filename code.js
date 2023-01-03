Solution.onclick = () => {

	SudokuSolver(board, 0, 0, 9);
};


//is safe function
function issafe(board,row,col,value){
    /*
	if(Row[row]&(1<<value)) return false;
	if(Col[col]&(1<<value)) return false;
	if(Box[getbox(row,col)]&(1<<value)) return false;
	return true;
    */
   for(let i=0;i<9;i++){
       if(board[row][i]==value) return false;
       if(board[i][col]==value) return false;
       let r = 3*Math.floor(row/3) + Math.floor(i/3);
       let c = 3*Math.floor(col/3) + i%3;
       if(board[r][c]==value) return false;
   }
   return true;
}

//sudoku solver
function SudokuSolver(board, i, j, n) {
	if(i==n){
		FillBoard(board);
        return true;
    }
    if(j==n){
        return SudokuSolver(board,i+1,0,n);
    }
    if(board[i][j]==0){
        for(let val=1;val<=9;val++){
            if(issafe(board,i,j,val)){
                board[i][j] = val;
                let ans = SudokuSolver(board,i,j+1,n);
                    if(ans) return true;
                    else {
						board[i][j] = 0;
					}
				}
        }
        return false;
    }
    else{
        SudokuSolver(board,i,j+1,n);
    }
}
