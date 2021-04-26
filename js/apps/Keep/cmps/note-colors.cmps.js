
export default {
    template: `
    <section class="note-colors">
        <div class="colors">
            
    <span class="color" style="background-color: #03045E" @click="$emit('colorChange','#03045E')"></span>
    <span class="color" style="background-color: #0077B6" @click="$emit('colorChange','#0077B6')"></span>
    <span class="color" style="background-color: #00B4D8" @click="$emit('colorChange','#00B4D8')"></span>
    <span class="color" style="background-color: #90E0EF" @click="$emit('colorChange','#90E0EF')"></span>
    <span class="color" style="background-color: #CAF0F8" @click="$emit('colorChange','#CAF0F8')"></span>                    
    <span class="color" style="background-color: #36827f" @click="$emit('colorChange','#36827f')"></span>
    <span class="color" style="background-color: #2a9d8f" @click="$emit('colorChange','#2a9d8f')"></span>
    <span class="color" style="background-color: #2de09f" @click="$emit('colorChange','#2de09f')"></span>
    <span class="color" style="background-color: #95efce" @click="$emit('colorChange','#95efce')"></span>
    <span class="color" style="background-color: #e9c46a" @click="$emit('colorChange','#e9c46a')"></span>                    
    <span class="color" style="background-color: #f4a261" @click="$emit('colorChange','#f4a261')"></span>                    
    <span class="color" style="background-color: #f06e64" @click="$emit('colorChange','#f06e64')"></span>                    
    <span class="color" style="background-color: #bf211e" @click="$emit('colorChange','#bf211e')"></span>                    
    <span class="color" style="background-color: #f25f5c" @click="$emit('colorChange','#f25f5c')"></span>                    
    <span class="color" style="background-color: #ff0a54" @click="$emit('colorChange','#ff0a54')"></span>                    
    <span class="color" style="background-color: #ff5c8a" @click="$emit('colorChange','#ff5c8a')"></span>                    
    <span class="color" style="background-color: #ff85a1" @click="$emit('colorChange','#ff85a1')"></span>                    
    <span class="color" style="background-color: #f9bec7" @click="$emit('colorChange','#f9bec7')"></span>                    
     
        </div>
    </section>
    `,
    methods: {
        // colorChange(color) {
        //     this.$emit('colorChange', color)
        // }
    }
}