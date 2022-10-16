import { Component, Input } from '@angular/core';

@Component({
  selector: 'chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent {
  constructor() {
    this.blackRook1 = new Rook(1, Column.a, Color.black, State.active, PieceType.Rook);
    this.blackRook2 = new Rook(1, Column.h, Color.black, State.active, PieceType.Rook);
    this.blackKnight1 = new Knight(1, Column.b, Color.black, State.active, PieceType.Knight);
    this.blackKnight2 = new Knight(1, Column.g, Color.black, State.active, PieceType.Knight);
    this.blackBishop1 = new Bishop(1, Column.c, Color.black, State.active, PieceType.Bishop);
    this.blackBishop2 = new Bishop(1, Column.f, Color.black, State.active, PieceType.Bishop);
    this.blackQueen = new Queen(1, Column.d, Color.black, State.active, PieceType.Queen);
    this.blackKing = new King(1, Column.e, Color.black, State.active, PieceType.King);
    this.blackPawn1 = new Pawn(2, Column.a, Color.black, State.active, PieceType.Pawn);
    this.blackPawn2 = new Pawn(2, Column.b, Color.black, State.active, PieceType.Pawn);
    this.blackPawn3 = new Pawn(2, Column.c, Color.black, State.active, PieceType.Pawn);
    this.blackPawn4 = new Pawn(2, Column.d, Color.black, State.active, PieceType.Pawn);
    this.blackPawn5 = new Pawn(2, Column.e, Color.black, State.active, PieceType.Pawn);
    this.blackPawn6 = new Pawn(2, Column.f, Color.black, State.active, PieceType.Pawn);
    this.blackPawn7 = new Pawn(2, Column.g, Color.black, State.active, PieceType.Pawn);
    this.blackPawn8 = new Pawn(2, Column.h, Color.black, State.active, PieceType.Pawn);

    this.whiteRook1 = new Rook(8, Column.a, Color.white, State.active, PieceType.Rook);
    this.whiteRook2 = new Rook(8, Column.h, Color.white, State.active, PieceType.Rook);
    this.whiteKnight1 = new Knight(8, Column.b, Color.white, State.active, PieceType.Knight);
    this.whiteKnight2 = new Knight(8, Column.g, Color.white, State.active, PieceType.Knight);
    this.whiteBishop1 = new Bishop(8, Column.c, Color.white, State.active, PieceType.Bishop);
    this.whiteBishop2 = new Bishop(8, Column.f, Color.white, State.active, PieceType.Bishop);
    this.whiteQueen = new Queen(8, Column.d, Color.white, State.active, PieceType.Bishop);
    this.whiteKing = new King(8, Column.e, Color.white, State.active, PieceType.Bishop);
    this.whitePawn1 = new Pawn(7, Column.a, Color.white, State.active, PieceType.Pawn);
    this.whitePawn2 = new Pawn(7, Column.b, Color.white, State.active, PieceType.Pawn);
    this.whitePawn3 = new Pawn(7, Column.c, Color.white, State.active, PieceType.Pawn);
    this.whitePawn4 = new Pawn(7, Column.d, Color.white, State.active, PieceType.Pawn);
    this.whitePawn5 = new Pawn(7, Column.e, Color.white, State.active, PieceType.Pawn);
    this.whitePawn6 = new Pawn(7, Column.f, Color.white, State.active, PieceType.Pawn);
    this.whitePawn7 = new Pawn(7, Column.g, Color.white, State.active, PieceType.Pawn);
    this.whitePawn8 = new Pawn(7, Column.h, Color.white, State.active, PieceType.Pawn);

    this.piecesList = [
      this.blackRook1,
      this.blackRook2,
      this.blackKnight1,
      this.blackKnight2,
      this.blackBishop1,
      this.blackBishop2,
      this.blackQueen,
      this.blackKing,
      this.blackPawn1,
      this.blackPawn2,
      this.blackPawn3,
      this.blackPawn4,
      this.blackPawn5,
      this.blackPawn6,
      this.blackPawn7,
      this.blackPawn8,
      this.whiteRook1,
      this.whiteRook2,
      this.whiteKnight1,
      this.whiteKnight2,
      this.whiteBishop1,
      this.whiteBishop2,
      this.whiteQueen,
      this.whiteKing,
      this.whitePawn1,
      this.whitePawn2,
      this.whitePawn3,
      this.whitePawn4,
      this.whitePawn5,
      this.whitePawn6,
      this.whitePawn7,
      this.whitePawn8
    ]
  }

  blackRook1: Rook;
  blackRook2: Rook;
  blackKnight1: Knight;
  blackKnight2: Knight;
  blackBishop1: Bishop;
  blackBishop2: Bishop;
  blackQueen: Queen;
  blackKing: King;
  blackPawn1: Pawn;
  blackPawn2: Pawn;
  blackPawn3: Pawn;
  blackPawn4: Pawn;
  blackPawn5: Pawn;
  blackPawn6: Pawn;
  blackPawn7: Pawn;
  blackPawn8: Pawn;
  whiteRook1: Rook;
  whiteRook2: Rook;
  whiteKnight1: Knight;
  whiteKnight2: Knight;
  whiteBishop1: Bishop;
  whiteBishop2: Bishop;
  whiteQueen: Queen;
  whiteKing: King;
  whitePawn1: Pawn;
  whitePawn2: Pawn;
  whitePawn3: Pawn;
  whitePawn4: Pawn;
  whitePawn5: Pawn;
  whitePawn6: Pawn;
  whitePawn7: Pawn;
  whitePawn8: Pawn;

  piecesList: Array<Piece>;

  pieceToMove: Piece | undefined;

  rows = [1, 2, 3, 4, 5, 6, 7, 8];
  columns = [Column.a, Column.b, Column.c, Column.d, Column.e, Column.f, Column.g, Column.h];

  public getPieceForSquare(row: number, column: Column): Piece | undefined {
    return this.piecesList.find(o => o.column == column && o.row == row && o.state === State.active);
  }

  public movePiece(row: number, column: Column) {
    if (!this.pieceToMove) {
      this.pieceToMove = this.piecesList.find(o => o.column == column && o.row == row && o.state === State.active);
    }
    else {
      const currentPiece = this.piecesList.find(o => o.column == column && o.row == row && o.state === State.active);
      this.pieceToMove.column = column;
      this.pieceToMove.row = row;
      if (currentPiece) {
        currentPiece.state = State.out;
      }
      this.pieceToMove = undefined;
    }
  }
}

class Piece {
  constructor(row: number, column: Column, color: Color, state: State, type: PieceType) {
    this.row = row;
    this.column = column;
    this.color = color;
    this.state = state;
    this.type = type;
    switch (this.type) {
      case PieceType.Rook: {
        this.name = 'rook';
      }
    }
  }

  name: string = "";
  row: number;
  column: Column;
  color: Color;
  state: State;
  type: PieceType;
}

class Rook extends Piece {
  name = "rook";
}

class Knight extends Piece {
  name = "knight";
}

class Bishop extends Piece {
  name = "bishop";
}

class Queen extends Piece {
  name = "queen";
}

class King extends Piece {
  name = "king";
}

class Pawn extends Piece {
  name = "pawn";
}

enum Column {
  a = 1,
  b,
  c,
  d,
  e,
  f,
  g,
  h
}

enum Color {
  black,
  white
}

enum State {
  active,
  out
}

enum PieceType {
  Rook,
  Knight,
  Bishop,
  Queen,
  King,
  Pawn
}
