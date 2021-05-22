// Part of a chess game to show off access modifiers and abstract classes/methods

// Types
type Colour = "Black" | "White";
type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

// Abstract classes cannot be directly instantiated, must be extended first
abstract class Piece {
  // Note: public is the default identifier
  // Protected makes the "position" property available to Piece and
  // any subclass of Piece
  protected position: Position;
  // Private assigns to this and ensures "colour" can only be accessed internally
  // by a Position object, readonly means it can't be changed
  constructor(private readonly colour: Colour, file: File, rank: Rank) {
    // Needs to be assigned here so position's type is not Position | undefined
    this.position = new Position(file, rank);
  }

  moveTo(position: Position) {
    this.position = position;
  }

  // All subclasses have to implement this method
  abstract canMoveTo(position: Position): boolean;
}

// A set of coordinates for a piece
class Position {
  file: File;
  rank: Rank;

  constructor(file: File, rank: Rank) {
    this.file = file;
    this.rank = rank;
  }
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}

class King extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
  // To call any of the superclass's (Piece's) methods, can use super.method()
  // or just super() if inside the constructor
}

class Game {
  private pieces = Game.makePieces();

  // Static method (i.e. class doesn't have to be instantiated first)
  private static makePieces() {
    return [new King("White", "E", 1), new King("Black", "H", 8)];
  }
}
