import { describe, expect, test } from 'vitest'
import Radio from '../src/index.vue'
import { ElRadioGroup, ElRadio } from 'element-plus'
import { mount, config } from '@vue/test-utils'
import { ref } from 'vue'
config.global.components = {
  ElRadioGroup,
  ElRadio,
}
describe('radio', () => {
  test('basic', async () => {
    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Banana', value: 'Banana' },
      { label: 'Cherry', value: 'Cherry' },
    ]
    const checked = ref('Apple')
    // const wrap = Radio
    const wrap = mount(
      () => <Radio options={options} v-model={[checked.value]}></Radio>,
      {
        attachTo: document.body,
      }
    )
    const [radio1, radio2, radio3] = wrap.findAll('.el-radio')
    expect(radio1.classes()).toContain('is-checked')
    await radio2.trigger('click')
    expect(checked.value).toBe('Banana')
    expect(radio2.classes()).toContain('is-checked')
    await radio3.trigger('click')
    expect(checked.value).toBe('Cherry')
    expect(radio3.classes()).toContain('is-checked')
  })
})
