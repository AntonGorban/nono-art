export interface CellProps {
  readonly cellColor: string | null;
  readonly selectedColor: string | null;
  readonly cellSize: number;
  readonly cellBorderRadius: number;
  readonly onClick: () => void;
}
