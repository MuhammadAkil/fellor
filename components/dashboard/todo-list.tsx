// components/TodoList.tsx
import { ChevronRight } from "lucide-react";
import type { TodoItem } from "@/types/dashboard";
import { cn } from "@/lib/utils";

interface TodoListProps {
	todos: TodoItem[];
}

export default function TodoList({ todos }: Readonly<TodoListProps>) {
	return (
		<div className="bg-white rounded-lg border border-gray-200 p-6">
			<h2 className="text-lg font-semibold text-gray-900 mb-6">To-Do List</h2>

			<div className="space-y-4">
				{todos.map((todo) => {
					const Icon = todo.icon;
					return (
						<div key={todo.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors cursor-pointer group">
							<div className="flex items-center gap-3">
								<div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", todo.color.bg)}>{Icon && <Icon className={cn("w-5 h-5", todo.color.text)} />}</div>
								<div>
									<p className="font-medium text-gray-900">{todo.title}</p>
									<p className="text-sm text-gray-600">{todo.description}</p>
								</div>
							</div>

							<ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
						</div>
					);
				})}
			</div>
		</div>
	);
}
