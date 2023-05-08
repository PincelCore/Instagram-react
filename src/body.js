import Stories from './stories';
import Posts from './posts';
import Sidebar from './sidebar';

export default function Body() {
    
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    )
}